import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import Cards from "../components/Layout/Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <Layout>
      <MainCorousal />
      <Cards />
    </Layout>
  );
};

export default HomePage;
