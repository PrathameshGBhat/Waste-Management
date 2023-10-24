import React from "react";
import Layout from "../components/Layout/Layout";
import Since2022 from "../images/Since2022.png";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import nopar from "../videos/nopar.mp4";
import TeamCards from "../components/Layout/TeamMembers/TeamCards";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Layout title={"About us"}>
      <motion.div
        className="row aboutus"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <video autoPlay muted loop>
          <source src={nopar} type="video/mp4" />
        </video>
        <div className="col-md-6 ">
          <img
            className="logo"
            src={Since2022}
            alt="contactus"
            // style={{ width: "40%" }}
          />
        </div>
        <div className="col-md-5">
          <div className="text-justify mt-4 ">
            <TeamCards />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default AboutUs;
