import React from "react";
import { PageHeader } from "../Components/PageHeader";
import { ProductsList } from "../Components/Products/ProductsList";

export function Shop() {
  return (
    <>
      <PageHeader page={"PRODUCTS"} />
      <div className="my-5">
        <ProductsList />
      </div>
    </>
  );
}
