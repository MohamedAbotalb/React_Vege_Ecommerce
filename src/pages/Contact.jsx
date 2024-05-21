/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PageHeader } from "../Components/PageHeader";

export function Contact() {
  return (
    <>
      <PageHeader page={"CONTACT US"} />

      <section className="bg-light py-4">
        <div className="container">
          <div className="row d-flex my-5">
            <div className="col-md-3 d-flex ">
              <div className="bg-white p-4 w-100">
                <p className="text-secondary mb-0">
                  <span className="text-dark">Address:</span> 198 West 21th
                  Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex  ">
              <div className="bg-white p-4 w-100">
                <p className="mb-0">
                  <span>Phone:</span>{" "}
                  <a
                    href="tel://1234567920"
                    className="text-decoration-none text-secondary"
                  >
                    + 1235 2355 98
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="bg-white p-4 w-100">
                <p className="mb-0">
                  <span>Email:</span>{" "}
                  <a
                    href="mailto:info@yoursite.com"
                    className="text-decoration-none text-secondary"
                  >
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="info bg-white p-4 w-100">
                <p className="mb-0">
                  <span>Website: </span>{" "}
                  <a href="#" className="text-decoration-none text-secondary">
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-white p-5 contact-form w-100">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control p-3 rounded-0"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control p-3 rounded-0"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control p-3 rounded-0"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    cols={30}
                    rows={7}
                    className="form-control p-3 rounded-0"
                    placeholder="Message"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-success py-3 px-5 rounded-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 d-flex">
              <div
                id="map"
                className="bg-white w-100"
                style={{
                  minHeight: "400px",
                  backgroundImage: "url(/assets/images/map.png",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
