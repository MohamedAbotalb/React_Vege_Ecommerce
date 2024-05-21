import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
import { fetchProducts } from "../../store/productsSlice";
import { Loader } from "../../Components/Loader";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      setTimeout(() => {
        setInitialLoading(false);
      }, 1000);
    });
  }, [dispatch]);

  if (initialLoading || loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

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
