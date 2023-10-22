import React from "react";
import Layout from "../components/Layout/Layout";
import MainCorousal from "../components/Layout/MainCorousal/MainCorousal";
import Cards from "../components/Layout/Cards";
import { useAuth } from "../Context/auth";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TypeWrite from "../components/Layout/TypeWrite.js";
import Wastecards from "../components/Layout/Wastecards.js";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="row divide">
        <div className="quotes col-md-5 ">
          <TypeWrite />
        </div>
        <div className="col-md-7 ">
          <MainCorousal />
        </div>
      </div>
      <div className="cards">
        <Cards />
      </div>
      <div className="WasteCard">
        <Wastecards />
      </div>
    </Layout>
  );
};

export default HomePage;
