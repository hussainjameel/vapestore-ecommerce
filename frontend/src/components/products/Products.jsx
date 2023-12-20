import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import AddIcon from "@mui/icons-material/Add";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import Footer from "../Footer.jsx";

const Products = (props) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        console.log("API Response:", data); // Log the response
        console.log("Set Products:", data.products); // Log the response
        setProducts(data.products);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []); // Fetch data when the component mounts

  return (
    <>
      <div>
        <h1 className="text-center m-5">___ Our Products ___</h1>
        <p className="text-center">
          If you are searching for a vape shop near me, you have come to the
          right place because Vape Station is Pakistan’s leading Vape Store for
          all your vaping needs. Our staff is always ready to assist you in
          finding the perfect set of products, be it devices or flavours, to
          suit your preferences and needs. Visit our store outlets or order
          online for delivery all over Pakistan.
        </p>
        {/* ... other content ... */}
        {userService.isAdmin() && (
          <button
            className="btn btn-dark m-5"
            onClick={() => navigate("/products/new")}
          >
            <AddIcon /> Add New Item
          </button>
        )}
        <div className="row p-5">
          {products.length === 0 ? (
            <p>There are no products.</p>
          ) : (
            products.map((product, index) => (
              <div key={index} className="col-sm-12 col-md-3 mb-4">
                <SingleProduct product={product} onDelete={getData} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
