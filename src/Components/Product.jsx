import React from "react";
import { Button, Card } from "react-bootstrap";
import "../css/product.css";

export function Product({ product }) {
  const { name, price, imageUrl } = product;

  return (
    <div className="col-md-6 col-lg-3">
      <Card className="h-100 border-0">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          className="product-image"
        />
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-success">${price}</Card.Text>
          <Button variant="outline-success" className="mt-auto">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
