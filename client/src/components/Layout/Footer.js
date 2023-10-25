import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer mt-5" >
        <h1 className="text-center">
          All Rights Reserved &copy; BrokenBrothers
        </h1>
        <div style={{marginLeft:"45%" , fontSize:'1.5em'}}>
          <BsInstagram /> <AiFillTwitterCircle />
        </div>
      </div>
    </>
  );
};

export default Footer;
