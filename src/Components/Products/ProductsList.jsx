import { useState } from "react";
import { Product } from "./Product";
import { ProductCreate } from "./crud/ProductCreate";
import { products as initialProducts } from "../../data/products";

/* eslint-disable jsx-a11y/anchor-is-valid */
export function ProductsList() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (newProduct) => {
    const id = products.length + 1;
    newProduct = { ...newProduct, id };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

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
            <div className="col-md-6 mb-4 text-center">
              <ProductCreate addProduct={addProduct} />
            </div>
          </div>
          <div className="row my-5">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onUpdate={updateProduct}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
