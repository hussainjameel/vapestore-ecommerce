import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/update/:id" element={<UpdateProduct />} />

            <Route path="/not-found" element={<NotFound />} />
            <Route path="/*" element={<Navigate replace to="/not-found" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
