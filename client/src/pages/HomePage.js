import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import { useAuth } from "../Context/auth";
import Cards from "../components/Layout/Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wastecards from "../components/Layout/Wastecards";


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div>
        <MainCorousal />
      </div>
      <div>govt schemes</div>
      <div>
        <Cards />
      </div>
      <div>
      <Wastecards />
      </div>
    </Layout>
  );
};

export default HomePage;
