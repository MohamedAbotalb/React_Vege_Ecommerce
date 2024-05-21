import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { SharedLayout } from "./Layouts/SharedLayout";
import { ProductDetails } from "./pages/ProductDetails";
import { NotFound } from "./pages/NotFound";
import { getAllProducts } from "./api/productApi";
import { ProductsTable } from "./pages/ProductsTable";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SharedLayout />}>
          <Route index loader={getAllProducts} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" loader={getAllProducts} element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route
            path="products"
            loader={getAllProducts}
            element={<ProductsTable />}
          />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
