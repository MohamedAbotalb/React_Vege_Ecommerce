/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { fetchCart } from "../store/cartSlice";

export function MyNavbar() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <>
      <div className="py-1 bg-success text-white">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                    3-5 Business days delivery &amp; Free Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand className="hover-text-success fw-bold" href="/">
            VegeFoods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/shop"
              >
                Shop
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "bg-success nav-link mx-3 text-white"
                    : "nav-link mx-3";
                }}
                to="/cart"
              >
                <i className="bi bi-basket-fill"></i>[{items.length}]
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
