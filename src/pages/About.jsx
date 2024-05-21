import React from "react";
import { PageHeader } from "../Components/PageHeader";

export function About() {
  return (
    <>
      <PageHeader page={"ABOUT US"} />

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5"
              style={{ backgroundImage: "url(/assets/images/about.jpg)" }}
            ></div>
            <div className="col-md-7 p-5">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4 fw-bold fs-1">
                    Welcome to Vegefoods an eCommerce website
                  </h2>
                </div>
              </div>
              <div className="text-secondary">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  But nothing the copy said could convince her and so it didn’t
                  take long until a few insidious Copy Writers ambushed her,
                  made her drunk with Longe and Parole and dragged her into
                  their agency, where they abused her for their.
                </p>
                <p>
                  <a href="/shop" className="btn btn-success rounded rounded-5">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-md-6 px-5">
              <h2 style={{ fontSize: 22 }} className="mb-0">
                Subscribe to our Newsletter
              </h2>
              <span className="text-secondary">
                Get e-mail updates about our latest shops and special offers
              </span>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <form action="#" className="">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="btn btn-success rounded-0 p-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
