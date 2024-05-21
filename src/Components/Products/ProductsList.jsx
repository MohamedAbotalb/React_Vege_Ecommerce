import { Product } from "./Product";
import { useLoaderData } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function ProductsList() {
  const { data: products } = useLoaderData();

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center">
              <span className="text-success">Featured Products</span>
              <h2 className="my-3 fw-bold">Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row my-5">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
