import React from "react";
import Footer from "../Footer.jsx";
import { Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import productService from "../../services/ProductService";

const NewProduct = (props) => {
  const [name, setname] = React.useState("");
  const [price, setPrice] = React.useState("");

  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <h3 className="my-5"> Add New Product</h3>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setname(e.target.value);
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
                .addProducts({ name, price })
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
            Add{" "}
          </button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default NewProduct;
