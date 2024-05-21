import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";

export function ProductShow({ product }) {
  const { name, price, imageUrl, hasDiscount } = product;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="outline-primary" className="mx-2" onClick={handleShow}>
        <FaEye />
      </Button>
      <Modal show={show} onHide={handleClose} backdrop={"static"}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={imageUrl} alt={name} className="img-fluid mb-3" />
          <h3>{name}</h3>
          <p>
            {hasDiscount ? (
              <>
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ${price}
                </span>{" "}
                <span className="text-success">
                  ${(price * 0.8).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-success">${price}</span>
            )}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
