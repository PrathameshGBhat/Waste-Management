import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import { useAuth } from "../Context/auth";
import Cards from "../components/Layout/Cards";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wastecards from "../components/Layout/Wastecards";
import IndiaStat from "../components/Layout/IndiaStat";
import TypeWrite from "../components/Layout/TypeWrite";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <MainCorousal />
      <div className="typing" style={{ marginLeft: "40%" }}>
        <TypeWrite />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <IndiaStat />
      </div>

      <div>
        <Wastecards />
      </div>
    </Layout>
  );
};

export default HomePage;
