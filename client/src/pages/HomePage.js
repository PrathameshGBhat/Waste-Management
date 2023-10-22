import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import { useAuth } from "../Context/auth";
import Cards from "../components/Layout/Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>

      <MainCorousal/>
      
      <Cards />
    </Layout>
  );
};

export default HomePage;
