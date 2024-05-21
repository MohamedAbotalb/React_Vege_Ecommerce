import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteProductById } from "../../../store/productsSlice";

export function ProductDelete({ product }) {
  const { id, name } = product;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductById(id));
    setShowDeleteModal(false);
  };

  return (
    <>
      <Button
        variant="outline-danger"
        className="mx-2"
        onClick={() => setShowDeleteModal(true)}
      >
        <FaRegTrashCan />
      </Button>
      <Modal
        backdrop="static"
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
