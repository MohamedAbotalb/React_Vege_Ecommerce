import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function ProductDelete({ product, onDelete }) {
  const { id, name } = product;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Button
        variant="outline-danger"
        className="mx-2"
        onClick={() => setShowDeleteModal(true)}
      >
        <i className="bi bi-trash-fill"></i>
      </Button>
      <Modal
        backdrop={"static"}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the product "{name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
