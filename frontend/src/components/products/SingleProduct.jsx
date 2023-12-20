import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const SingleProduct = ({ product, onDelete }) => {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Fetch random vape-related image from Unsplash
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    const accessKey = "MCdxY02U7MdOSeaqS93tyuEjjMqMwwQtzGQILWUTVGk"; // Replace with your Unsplash API access key
    const query = "vapes";
    const apiUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const randomImageURL = data.urls.regular;
        setImageURL(randomImageURL);
      })
      .catch((error) => {
        console.error("Error fetching image from Unsplash:", error);
      });
  };

  return (
    <div className="card h-100">
      <div
        className="img-container"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <img
          src={imageURL}
          className="card-img-top"
          alt={product.name}
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">RS {product.price} /-</p>
        {userService.isAdmin() && (
          <>
            <button
              className="btn btn-secondary mt-auto"
              onClick={() => navigate("/products/update/" + product._id)}
            >
              <EditIcon /> EDIT
            </button>{" "}
            <button
              className="btn btn-dark mt-2"
              onClick={(e) => {
                productService
                  .deleteProducts(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <ClearIcon /> REMOVE
            </button>
          </>
        )}
        {userService.isUser() && (
          <>
            <button className="btn btn-dark mt-auto" onClick="">
              <LocalMallIcon />
              Buy
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
