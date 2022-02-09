import React from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";
import "./Profile.css"
import '@deadcoder0904/react-typical/dist/styles.min.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
             < a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
              </div>

            
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Chris Mattox</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <ReactTypical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    2000 ,
                    "Full Stack Developer ",
                    2000 ,
                    "MERN Stack Developer",
                    2000 ,
                    "React/React Native Dev"	,
                    2000 ,
                    "Cross Platform Dev",
                    2000 ,
                  ]}
                />
              </h1>
              <span className="profile-role-tageline">
                An extreme programming (XP) practicioner who quickly delivers
                quality products that delight customers.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Chris_Resume.pdf" download="Ehiedu Chris_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
