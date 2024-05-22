import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPenToSquare } from "react-icons/fa6";
import ProductForm from "./ProductForm";

export function ProductUpdate({ product, onUpdate }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdate = (updatedProduct) => {
    onUpdate(product.id, updatedProduct);
    setShowUpdateModal(false);
  };

  const handleClose = () => setShowUpdateModal(false);

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
          <ProductForm
            initialProduct={product}
            onSubmit={handleUpdate}
            onClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
