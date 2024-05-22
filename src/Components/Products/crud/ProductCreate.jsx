import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { addNewProduct } from "../../../store/productsSlice";
import ProductForm from "./ProductForm";

export function ProductCreate() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const randomImage = () => Math.floor(Math.random() * 11) + 1;

  const handleSubmit = (newProduct) => {
    const value = randomImage();
    const productToAdd = {
      ...newProduct,
      imageUrl: `/assets/images/product-${value}.jpg`,
    };
    dispatch(addNewProduct(productToAdd));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Product
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm
            initialProduct={{}}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
