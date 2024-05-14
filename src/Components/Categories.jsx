/* eslint-disable jsx-a11y/anchor-is-valid */
export function Categories() {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                  <div
                    className="align-self-stretch d-flex w-100 h-100 text-center"
                    style={{
                      backgroundImage: "url(/assets/images/category-1.jpg)",
                      backgroundSize: "Cover",
                      height: "500px",
                    }}
                  >
                    <div className="mx-auto my-2">
                      <h2 className="text-success">Vegetables</h2>
                      <p>Protect the health of every home</p>
                      <p>
                        <a href="#" className="btn btn-success">
                          Shop now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className=" mb-4 d-flex align-items-end"
                    style={{
                      backgroundImage: "url(/assets/images/category-2.jpg)",
                      backgroundSize: "Cover",
                      height: "250px",
                    }}
                  >
                    <div className="text px-3 py-1">
                      <h2>
                        <a href="#" className="btn btn-success">
                          Fruits
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div
                    className=" d-flex align-items-end"
                    style={{
                      backgroundImage: "url(/assets/images/category-1.jpg)",
                      backgroundSize: "Cover",
                      height: "250px",
                    }}
                  >
                    <div className="text px-3 py-1">
                      <h2>
                        <a href="#" className="btn btn-success">
                          Vegetables
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className=" mb-4 d-flex align-items-end"
                style={{
                  backgroundImage: "url(/assets/images/category-3.jpg)",
                  backgroundSize: "Cover",
                  height: "250px",
                }}
              >
                <div className="text px-3 py-1">
                  <h2>
                    <a href="#" className="btn btn-success">
                      Juices
                    </a>
                  </h2>
                </div>
              </div>
              <div
                className=" d-flex align-items-end"
                style={{
                  backgroundImage: "url(/assets/images/category-4.jpg)",
                  backgroundSize: "Cover",
                  height: "250px",
                }}
              >
                <div className="text px-3 py-1">
                  <h2>
                    <a href="#" className="btn btn-success">
                      Dried
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
