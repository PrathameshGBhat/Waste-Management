import React from "react";
import Layout from "./../components/Layout/Layout";
import BBCall from "../images/BBCall.png";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import bubbles from "../videos/bubbles.mp4";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <video autoPlay muted loop>
          <source src={bubbles} type="video/mp4" />
        </video>
        <div className="col-md-6 ">
          <img className="call" src={BBCall} alt="contactus" />
        </div>
        <div className="col-md-4 mt-4 p-5   ">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2 text-white">
            Any query and info about the Portal feel free to contact us
          </p>
          <p className="mt-3 text-white">
            <BiMailSend /> : www.bbtrash@gmail.com
          </p>
          <p className="mt-3 text-white">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 text-white">
            <BiSupport /> : 1800-1800-1800 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
