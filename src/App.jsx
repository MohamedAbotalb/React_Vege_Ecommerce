import { Header } from "./Components/Header";
import { Categories } from "./Components/Categories";
import { ProductsList } from "./Components/Products/ProductsList";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <ProductsList />
      <Footer />
    </>
  );
}

export default App;
