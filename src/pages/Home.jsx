import React from "react";
import { Slider } from "../Components/Slider";
import { Categories } from "../Components/Categories";
import { ProductsList } from "../Components/Products/ProductsList";

export function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <ProductsList />
    </>
  );
}
