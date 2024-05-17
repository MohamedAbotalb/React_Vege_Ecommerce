import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export function ProductCreate({ addProduct }) {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setProductName("");
    setProductPrice("");
    setNameError("");
    setPriceError("");
    setHasDiscount(false);
  };

  const randomImage = () => {
    return Math.floor(Math.random() * 11) + 1;
  };

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
      const value = randomImage();
      const newProduct = {
        name: productName,
        price: productPrice,
        imageUrl: `/assets/images/product-${value}.jpg`,
        hasDiscount: hasDiscount,
      };
      addProduct(newProduct);
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
