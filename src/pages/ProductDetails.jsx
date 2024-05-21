/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { MdStarOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { PageHeader } from "../Components/PageHeader";
import { getProductById } from "../api/productApi";

export function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(id);

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const { name, price, imageUrl } = product;
  return (
    <>
      <PageHeader page={"PRODUCT DETAILS"} />

      {product ? (
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
                  <span>${price}</span>
                </p>
                <p className="text-secondary">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth. Text
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
                        data-field
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
                        value={1}
                        min={1}
                        max={100}
                      />
                    </div>
                    <span className="input-group-btn">
                      <button
                        type="button"
                        className="btn border border-1 ms-3"
                        data-type="plus"
                        data-field
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
                <p>
                  <a href="/cart" className="btn btn-dark py-3 px-5 rounded-5">
                    Add to Cart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
