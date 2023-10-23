import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import waste from "../../videos/waste.mp4";
import { motion } from "framer-motion";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing Went Wrong");
    }
  };

  return (
    <Layout title="Register - WM ">
      <motion.div
        className="form-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <video autoPlay muted loop className="bg-video">
          <source src={waste} type="video/mp4" />
        </video>
        <h1 class="text-white ">Register Page</h1>
        <form className="regform" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <h2
            className="text-dark"
            style={{ fontSize: "12px", padding: "5px", marginTop: "10px" }}
          >
            Already Registered? <NavLink to="/login"> Login</NavLink>
          </h2>
        </form>
      </motion.div>
    </Layout>
  );
};

export default Register;
