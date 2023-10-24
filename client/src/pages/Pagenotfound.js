import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
const Pagenotfound = () => {
  return (
    <Layout>
      <motion.div
        className="pnf"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </motion.div>
    </Layout>
  );
};

export default Pagenotfound;
