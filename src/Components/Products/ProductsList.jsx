import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "./Product";
import { fetchProducts } from "../../store/productsSlice";
import { Loader } from "../../Components/Loader";
import { PaginationComponent } from "../../Components/Pagination";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function ProductsList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const productsPerPage = 8;

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts()).then(() => {
      setTimeout(() => {
        setInitialLoading(false);
      }, 1000);
    });
  }, [dispatch]);

  if (initialLoading || loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  // Calculate products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = isHomePage
    ? products.slice(0, productsPerPage)
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          {isHomePage ? (
            <div className="text-center">
              <button
                className="btn btn-success mb-5"
                onClick={() => navigate("/shop")}
              >
                Load More
              </button>
            </div>
          ) : (
            <PaginationComponent
              totalItems={products.length}
              itemsPerPage={productsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}
        </div>
      </section>
    </>
  );
}
