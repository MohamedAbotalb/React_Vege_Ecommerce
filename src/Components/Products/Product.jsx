import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/product.css";

export function Product({ product }) {
  const { id, name, price, hasDiscount, imageUrl } = product;

  const [discountedPrice, setDiscountedPrice] = useState(price);

  useEffect(() => {
    if (hasDiscount) {
      const discount = 0.2;
      const newPrice = price - price * discount;
      setDiscountedPrice(newPrice.toFixed(2));
    }
  }, [hasDiscount, price]);

  return (
    <div className="col-md-6 col-lg-3 my-2">
      <Card className="h-100 border-1 border-light-subtle">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          className="product-image"
        />

        <Card.Body className="d-flex flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {hasDiscount ? (
              <>
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ${price}
                </span>{" "}
                <span className="text-success">${discountedPrice}</span>
              </>
            ) : (
              <span className="text-success">${price}</span>
            )}
          </Card.Text>
          <div>
            <Link to={`/shop/${id}`}>
              <Button variant="outline-success" className="mx-2">
                Read more
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
