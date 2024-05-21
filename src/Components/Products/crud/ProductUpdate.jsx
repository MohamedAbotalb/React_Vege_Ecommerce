import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPenToSquare } from "react-icons/fa6";

export function ProductUpdate({ product, onUpdate }) {
  const { id, name, price, hasDiscount } = product;
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedHasDiscount, setUpdatedHasDiscount] = useState(hasDiscount);
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  const validateForm = () => {
    let valid = true;
    if (updatedName.length <= 2) {
      setNameError("Product name must be more than 2 characters.");
      valid = false;
    } else {
      setNameError("");
    }
    if (!updatedPrice || updatedPrice <= 10) {
      setPriceError("Product price must be more than $10.");
      valid = false;
    } else {
      setPriceError("");
    }
    return valid;
  };

  const handleUpdate = () => {
    if (validateForm()) {
      const updatedProduct = {
        ...product,
        name: updatedName,
        price: updatedPrice,
        hasDiscount: updatedHasDiscount,
      };
      onUpdate(id, updatedProduct);
      setShowUpdateModal(false);
    }
  };

  const handleClose = () => {
    setShowUpdateModal(false);
    setNameError("");
    setPriceError("");
  };

  return (
    <>
      <Button
        variant="outline-info"
        className="mx-2"
        onClick={() => setShowUpdateModal(true)}
      >
        <FaPenToSquare />
      </Button>
      <Modal backdrop={"static"} show={showUpdateModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                isInvalid={!!priceError}
              />
              <Form.Control.Feedback type="invalid">
                {priceError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductHasDiscount">
              <Form.Check
                type="checkbox"
                label="Has Discount"
                checked={updatedHasDiscount}
                onChange={(e) => setUpdatedHasDiscount(e.target.checked)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
