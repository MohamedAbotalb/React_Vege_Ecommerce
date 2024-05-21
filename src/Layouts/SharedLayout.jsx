import React from "react";
import { MyNavbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";

export function SharedLayout() {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
