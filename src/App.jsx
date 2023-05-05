import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { AddProduct } from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
