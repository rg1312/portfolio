import React from "react";
import "./project.css"; // Assuming you have a CSS file named 'Project.css'
import weatherapp from "../assets/weathera.png";
import vortexapp from "../assets/vortex.png";

function Project() {
  return (
    <>
      <h1
        className="project-title"
        style={{
          color: "white",
          fontFamily: "Apoc Revelations Regular ,serif",
          letterSpacing: "1px",
          fontSize: "2rem",
          marginTop: "2%",
          paddingLeft: "15px",
        }}
      >
        PROJECT{" "}
      </h1>
      <div className="project-container">
        <div className="project-item">
          <div className="project-content">
            <div className="project-overlay"></div>
            <img className="project-image" src={weatherapp} alt="" />
            <div className="project-details fadeInBottom">
              <h3 className="project-details-title">Weather App</h3>
              <p className="project-details-text">
                A simple React-powered weather app, designed to provide
                real-time updates using an API
                <br />
                <a
                  href="https://github.com/DevGajjar28/weather-app"
                  style={{
                    background: "black",
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-content">
            {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
            <div className="project-overlay"></div>
            <img className="project-image" src={vortexapp} alt="" />
            <div className="project-details fadeInTop">
              <h3>Vortex </h3>
              <p>
                Created a dynamic content aggregator akin to Unsplash,
                leveraging React.js for frontend and Django with Django Rest
                Framework for backend
              </p>
              <a
                href="https://github.com/DevGajjar28/Vortex_app"
                style={{
                  background: "black",
                  color: "white",
                  fontSize: "1.2rem",
                }}
              >
                GitHub
              </a>
            </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
