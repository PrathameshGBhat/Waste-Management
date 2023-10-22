import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout/Layout";
import "../styles/com.css";
import noplastic from "../../src/noplastic.mp4";

const Complaint = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxk2x3d",
        "template_1eikuht",
        form.current,
        "6I5qAtnI0gbW7VEZe"
      )
      .then(
        (result) => {
          console.log(result.text);
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
      <div className="form-container">
      <video autoPlay loop muted >
       <source src={noplastic} type="video/mp4"/>
      </video>
      <h1>Grievance Box</h1>
       <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
        <label>Name</label>
        <input type="text" name="user_name" className="form-control"  placeholder="Enter Your Name" required/>
        </div>
        <div className="mb-3">
        <label>Email</label>
        <input type="email" name="user_email" className="form-control" placeholder="Enter Your Email" required/>
        </div>
        <div className="mb-3">
        <label>Complaint</label>
        <textarea name="complaint" className="form-control" placeholder="Enter Your Complaint" required/>
        </div>
        <div>
        <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
      </div>
    </Layout>
  );
};

export default Complaint;
