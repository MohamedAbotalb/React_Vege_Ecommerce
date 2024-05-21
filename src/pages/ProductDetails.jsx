/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { MdStarOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { PageHeader } from "../Components/PageHeader";
import { getProductById } from "../api/productApi";
import { addItemToCart } from "../store/cartSlice";
import { Loader } from "../Components/Loader";

export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [initialLoading, setInitialLoading] = useState(true);
  const [product, setProduct] = useState({});
  const cartItems = useSelector((state) => state.cart.items);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
        setInitialLoading(false);
      } catch (error) {
        setError(error);
        setInitialLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const { name, price, hasDiscount, imageUrl } = product;
  const [discountedPrice, setDiscountedPrice] = useState(price);

  useEffect(() => {
    if (hasDiscount) {
      const discount = 0.2;
      const newPrice = price - price * discount;
      setDiscountedPrice(newPrice.toFixed(2));
    }
  }, [hasDiscount, price]);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({ id, name, quantity, price: discountedPrice, imageUrl })
    );
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const isProductInCart = cartItems.some((item) => item.id === id);

  if (initialLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <PageHeader page={"PRODUCT DETAILS"} />
      <section className="">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 mb-5">
              <img src={imageUrl} className="img-fluid" alt={name} />
            </div>
            <div className="col-lg-6 ps-md-5">
              <h3>{name}</h3>
              <div className="rating d-flex align-items-center">
                <p className="text-left me-4">
                  <a
                    href="#"
                    className="text-secondary text-decoration-none me-2"
                  >
                    5.0
                  </a>
                  <a href="#" className="text-secondary fs-5">
                    <MdStarOutline />
                  </a>
                  <a href="#" className="text-secondary fs-5">
                    <MdStarOutline />
                  </a>
                  <a href="#" className="text-secondary fs-5">
                    <MdStarOutline />
                  </a>
                  <a href="#" className="text-secondary fs-5">
                    <MdStarOutline />
                  </a>
                  <a href="#" className="text-secondary fs-5">
                    <MdStarOutline />
                  </a>
                </p>
                <p className="text-left">
                  <a href="#" className="me-3 text-dark text-decoration-none">
                    100 <span className="text-secondary">Rating</span>
                  </a>
                </p>
                <p className="text-left">
                  <a href="#" className="ms-3 text-dark text-decoration-none">
                    500 <span className="text-secondary">Sold</span>
                  </a>
                </p>
              </div>
              <p className="fs-1">
                {hasDiscount ? (
                  <>
                    <span
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      ${price}
                    </span>{" "}
                    <span className="text-success">${discountedPrice}</span>
                  </>
                ) : (
                  <span className="text-success">${price}</span>
                )}
              </p>
              <p className="text-secondary">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Text
                should turn around and return to its own, safe country. But
                nothing the copy said could convince her and so it didn’t take
                long until.
              </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <Form.Select name="size" aria-label="Default select">
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Extra Large</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="input-group col-md-6 d-flex my-3">
                  <span className="input-group-btn me-3">
                    <button
                      type="button"
                      className="btn border border-1"
                      data-type="minus"
                      onClick={handleDecreaseQuantity}
                    >
                      <FaMinus />
                    </button>
                  </span>
                  <div style={{ width: "100px" }}>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="form-control border border-1 text-center"
                      value={quantity}
                      min={1}
                      max={100}
                    />
                  </div>
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn border border-1 ms-3"
                      data-type="plus"
                      onClick={handleIncreaseQuantity}
                    >
                      <FaPlus />
                    </button>
                  </span>
                </div>
                <div className="w-100" />
                <div className="col-md-12 text-dark my-2 fs-5">
                  <p>600 kg available</p>
                </div>
              </div>
              <Button
                variant="outline-success"
                className="py-3 px-5 rounded-5"
                onClick={handleAddToCart}
                disabled={isProductInCart}
              >
                {isProductInCart ? "Product in Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
