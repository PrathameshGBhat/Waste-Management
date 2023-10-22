import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import BBCall from "../images/BBCall.png";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            className="call"
            src={BBCall}
            alt="contactus"
            style={{ width: " 100vh" }}
          />
        </div>
        <div className="col-md-4 mt-4 p-5   ">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about the Portal feel free to contact us
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.bbtrash@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1800-1800 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
