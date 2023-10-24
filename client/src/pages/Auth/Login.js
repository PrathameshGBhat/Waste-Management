import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../Context/auth";
import float1 from "../../videos/float1.mp4";
import { motion } from "framer-motion";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("User Not Registered");
    }
  };
  return (
    <Layout title="Register - WM">
      <motion.div
        className="form-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <video autoPlay muted loop className="bg-video">
          <source src={float1} type="video/mp4" />
        </video>
        <h1 class="text-white">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"></div>
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
            <div>
            <NavLink to="/forgot-password"> Forgot Password</NavLink></div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <h2
            className="text-dark"
            style={{ fontSize: "12px", padding: "10px", marginTop: "10px" }}
          >
            Did not Register? <NavLink to="/register"> Register</NavLink>
          </h2>
        </form>
      </motion.div>
    </Layout>
  );
};

export default Login;
