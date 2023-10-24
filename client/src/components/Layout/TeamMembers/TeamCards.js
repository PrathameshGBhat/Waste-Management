import React from "react";
import "../TeamMembers/TeamCards.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Prathamesh from "../../../Owners/Prathamesh.jpg";
import sujeeth from "../../../Owners/Sujeeth.png";
const TeamCards = () => {
  return (
    <>
      <div className="container">
        <div className="card ">
          <div className="card-image">
            <img src={Prathamesh} alt="Profile image" />
          </div>
          <p className="name">Prathamesh </p>
          <p>Full Stack developer</p>
          <p className="card-text">
            2nd Year CS Student with a crazy aim for life and hardworking
          </p>
          <div className="socials">
            <button className="github">
              <a href="https://github.com/PrathameshGBhat">
                <BsGithub />
              </a>
            </button>
            <button className="linkedin">
              <a href="https://www.linkedin.com/in/prathamesh-bhat-375443293/">
                <BsLinkedin />
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={sujeeth} alt="Profile image" />
          </div>
          <p className="name">Sujeeth</p>
          <p>Full Stack developer</p>
          <p className="card-text">
            2nd Year CS Student with a crazy aim for life and hardworking
          </p>
          <div className="socials">
            <button className="github">
              <a href="https://github.com/MrSujeeth">
                <BsGithub />
              </a>
            </button>
            <button className="linkedin">
              <a href="https://www.linkedin.com/in/sujeeth-1292b7231/">
                <BsLinkedin />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
