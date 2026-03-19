import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllPizza from "./pages/Pizzas/AllPizza";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OnePizza from "./pages/Pizzas/OnePizza";
import NewPizza from "./pages/Pizzas/NewPizza";
import EditPizza from "./pages/Pizzas/EditPizza";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import NavigationBar from "./helpers/Navbar";
import Login from "./pages/Login";
import OrderPage from "./pages/Orders/OrderPage";
import NewOrder from "./pages/Orders/NewOrder";
import EditOrder from "./pages/Orders/EditOrder";
import OneOrder from "./pages/Orders/OneOrder";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <br></br>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/pizza/:id" element={<OnePizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/newOrder" element={<NewOrder/>}/>
        <Route path="/edit-order/:id" element={<EditOrder/>}/>
        <Route path="/order/:id" element={<OneOrder/>}/>

      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
