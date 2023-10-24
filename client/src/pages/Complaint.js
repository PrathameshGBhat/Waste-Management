import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout/Layout";
import "../styles/com.css";
import noplastic from "../../src/noplastic.mp4";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
const Complaint = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6d6w7mr",
        "template_7spfciy",
        form.current,
        "ylBS3_uk4xs27mOrH"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Complaint sent");
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Layout>
      <motion.div
        className="form-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ opacity: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <video autoPlay loop muted>
          <source src={noplastic} type="video/mp4" />
        </video>
        <h1>Grievance Box</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label>Complaint</label>
            <textarea
              name="complaint"
              className="form-control"
              placeholder="Enter Your Complaint"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </Layout>
  );
};

export default Complaint;
