import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import { useAuth } from "../Context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout>
      <MainCorousal/>
      
    </Layout>
  );
};

export default HomePage;
