import { useState } from "react";
import Table from "react-bootstrap/Table";
import { ProductShow } from "./crud/ProductShow";
import { ProductCreate } from "./crud/ProductCreate";
import { ProductUpdate } from "./crud/ProductUpdate";
import { ProductDelete } from "./crud/ProductDelete";
import {
  addNewProduct,
  deleteProductById,
  updateProductById,
} from "../../api/productApi";
import { useLoaderData } from "react-router-dom";

export function ProductsTable() {
  const { data } = useLoaderData();
  const [products, setProducts] = useState(data);

  const addProduct = async (newProduct) => {
    try {
      const id = `${+products[products.length - 1].id + 1}`;
      newProduct = { ...newProduct, id };
      await addNewProduct(newProduct);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductById(id);
      const newProducts = products.filter((product) => product.id !== id);
      setProducts([...newProducts]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const { id } = updatedProduct;
      await updateProductById(updatedProduct, id);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-between">
            <h2 className="col-md-6">Products Table</h2>

            <div className="col-md-6 mb-4 text-end">
              <ProductCreate addProduct={addProduct} />
            </div>
          </div>
          <Table striped hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td>${product.price}</td>
                    <td>{product.hasDiscount ? "Yes" : "No"}</td>
                    <td>
                      <ProductShow product={product} />
                      <ProductUpdate
                        product={product}
                        onUpdate={updateProduct}
                      />
                      <ProductDelete
                        product={product}
                        onDelete={deleteProduct}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}
