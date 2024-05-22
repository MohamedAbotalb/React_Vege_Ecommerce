import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ProductForm = ({ initialProduct, onSubmit, onClose }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct.name);
      setProductPrice(initialProduct.price);
      setHasDiscount(initialProduct.hasDiscount);
    }
  }, [initialProduct]);

  const validateForm = () => {
    let valid = true;
    if (productName.length <= 2) {
      setNameError("Product name must be more than 2 characters.");
      valid = false;
    } else {
      setNameError("");
    }
    if (!productPrice || productPrice <= 10) {
      setPriceError("Product price must be more than $10.");
      valid = false;
    } else {
      setPriceError("");
    }
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit({
        ...initialProduct,
        name: productName,
        price: productPrice,
        hasDiscount: hasDiscount,
      });
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          isInvalid={!!nameError}
        />
        <Form.Control.Feedback type="invalid">
          {nameError}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="productPrice">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          min={10}
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          isInvalid={!!priceError}
        />
        <Form.Control.Feedback type="invalid">
          {priceError}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="hasDiscount">
        <Form.Check
          type="checkbox"
          label="Has Discount"
          checked={hasDiscount}
          onChange={(e) => setHasDiscount(e.target.checked)}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="secondary" onClick={onClose} className="me-2">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;
