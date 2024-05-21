import React from "react";

export function PageHeader({ page }) {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/assets/images/bg_1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="container">
          <div className="text-center text-light">
            <p className="fs-5">
              <span className="mr-2 ">
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </span>
              <span className="mx-2">/</span>
              <span>{page}</span>
            </p>
            <h1 className="fw-bold">{page}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
