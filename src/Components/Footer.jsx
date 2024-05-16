/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/footer.css";

export function Footer() {
  return (
    <div className="footer-clean bg-light">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="/">Dried</a>
                </li>
                <li>
                  <a href="/">Fruits</a>
                </li>
                <li>
                  <a href="/">Vegetables</a>
                </li>
                <li>
                  <a href="/">Juices</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Connect</h3>
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Pinterest</a>
                </li>
              </ul>
            </div>
            <div className="row justify-content-around align-items-center mt-5">
              <div className="col-lg-6 text-center">
                <p className="copyright fs-5">
                  VegeFoods © {new Date().getFullYear()}
                </p>
              </div>
              <div className="col-lg-6 text-center mt-1">
                <a href="#" className="fs-2 p-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="fs-2 p-3 text-info">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="fs-2 p-3 text-danger">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="fs-2 p-3 text-danger">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
