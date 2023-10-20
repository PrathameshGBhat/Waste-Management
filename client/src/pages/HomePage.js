import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
<<<<<<< HEAD
import { useAuth } from "../Context/auth";
=======
import Cards from "../components/Layout/Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 652c7d130ad404f9ea5e55694578777ab9a92862

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
<<<<<<< HEAD
      <MainCorousal/>
      
=======
      <MainCorousal />
      <Cards />
>>>>>>> 652c7d130ad404f9ea5e55694578777ab9a92862
    </Layout>
  );
};

export default HomePage;
