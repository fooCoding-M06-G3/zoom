import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import Avatar from "../components/avatarcomponent/Avatar";
import ProductScreen from "./ProductScreen";
import { Typography } from "@material-ui/core";

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/getProducts")
      .then(response => response.json())
      .then(products => {
        setItems(products);
        setLoading(false)
      });
  }, []);



  return (
    <Fragment>
      <div className="main-image">
        <img src={require("../images/zoom.jpg")} alt="mainImage" />
      </div>
      <Avatar />
      <br />
      <Typography variant="h5"> Recently Published </Typography>
      <br />
      <ProductScreen items={items} isLoading={loading} />
    </Fragment>
  );
}
