import React from "react";
import "../TeamMembers/TeamCards.css";
import profile2 from "./images/profile2.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const TeamCards = () => {
  return (
    <>
      <div className="container">
        <div className="card ">
          <div className="card-image">
            <img src={profile2} alt="Profile image" />
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
              <BsLinkedin />
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={profile2} alt="Profile image" />
          </div>
          <p className="name">Sujeeth</p>
          <p>Back-End developer</p>
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
              <BsLinkedin />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
