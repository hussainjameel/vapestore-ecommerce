import React from "react";
import Footer from "../Footer.jsx";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../../services/ProductService";

const UpdateProduct = (props, history) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setPrice(data.price);
    });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} className="my-5">
          <h3> Update Product</h3>
        </Grid>
        <Grid item xs={12} className="mt-0">
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <button
            className="btn btn-dark mb-5"
            onClick={(e) => {
              productService
                .updateProducts(id, { name, price })
                .then((data) => {
                  console.log(data);
                  navigate("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {" "}
            Update{" "}
          </button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default UpdateProduct;
