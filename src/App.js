// https://www.youtube.com/watch?v=c1xTDSIXit8
import React from 'react'
import ProductList from "./pages/ProductList";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Blank from "./pages/Blank";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product" element={<Product />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
