import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Table,
  Form,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { fetchCart, removeItemFromCart } from "../store/cartSlice";
import { PageHeader } from "../Components/PageHeader";
import { Loader } from "../Components/Loader";

export function Cart() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCart()).then(() => {
      setTimeout(() => {
        setInitialLoading(false);
      }, 1000);
    });
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  if (initialLoading || loading) return <Loader />;
  if (error)
    return (
      <Alert className="text-center" variant="danger">
        {error}
      </Alert>
    );

  if (items.length === 0) {
    return (
      <Alert className="text-center" variant="warning">
        Your cart is empty.
      </Alert>
    );
  }

  const subtotal = items
    .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <PageHeader page={"CART"} />
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className="w-25">
                      <Form.Control
                        type="number"
                        className="text-center"
                        value={item.quantity}
                        readOnly
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="justify-content-between my-5">
          <Col md={4}>
            <div className="cart-total border border-1 p-3">
              <h3>Coupon Code</h3>
              <p>Enter your coupon code if you have one</p>
              <form action="#" className="info">
                <div className="form-group">
                  <label htmlFor="couponCode">Coupon code</label>
                  <input
                    type="text"
                    className="form-control text-left my-2 p-3"
                    id="couponCode"
                    placeholder="Enter coupon code"
                  />
                </div>
              </form>
              <Button variant="success" className="py-2 px-4 mt-3">
                Apply Coupon
              </Button>
            </div>
          </Col>

          <Col md={4}>
            <div className="cart-total border border-1 p-3">
              <h3>Estimate Shipping and Tax</h3>
              <p>Enter your destination to get a shipping estimate</p>
              <form action="#" className="info">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control text-left my-2 p-3"
                    id="country"
                    placeholder="Enter country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State/Province</label>
                  <input
                    type="text"
                    className="form-control text-left my-2 p-3"
                    id="state"
                    placeholder="Enter state/province"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip/Postal Code</label>
                  <input
                    type="text"
                    className="form-control text-left my-2 p-3"
                    id="zip"
                    placeholder="Enter zip/postal code"
                  />
                </div>
              </form>
              <Button variant="success" className="py-2 px-4 mt-3">
                Estimate
              </Button>
            </div>
          </Col>

          <Col md={4}>
            <div className="cart-total border border-1 p-3">
              <h3>Cart Totals</h3>
              <div className="d-flex justify-content-between my-3">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between my-3">
                <span>Delivery</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between my-3">
                <span>Discount</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
              <Button variant="success" className="mt-3">
                Proceed to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
