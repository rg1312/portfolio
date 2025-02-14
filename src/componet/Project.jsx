import React from "react";
import "./project.css"; // Assuming you have a CSS file named 'Project.css'
import cacm from "../assets/CACM.png";
import xenserver from "../assets/Xen Server.png";

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
          marginTop: "4%",
          paddingLeft: "15px",
        }}
      >
        PROJECT{" "}
      </h1>
      <div className="project-container">
        <div className="project-item">
          <div className="project-content">
            <div className="project-overlay"></div>
            <img className="project-image" src={cacm} alt="" />
            <div className="project-details fadeInBottom">
              <h3 className="project-details-title">Cloud Automation</h3>
              <p className="project-details-text">
                Automated Cloud infrastructure and application deployments using GitLab, Jenkins and Chef tool.
                <br />
                <a
                  href="https://drive.google.com/drive/folders/1w2BY-9avjp-ugHfJPzlzHAxXqTwm4lCG"
                  style={{
                    //background: "black",
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  Project Link
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-content">
            {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
            <div className="project-overlay"></div>
            <img className="project-image" src={xenserver} alt="" />
            <div className="project-details fadeInTop">
              <h3>Xen Server</h3>
              <p>
                Virtualized the Infrastrucutre using Xen Center and Xen servers
              </p>
              <a
                href="https://drive.google.com/drive/folders/1toqefO9Q3ZTUU6u-3z6rae5MVh8neHsb"
                style={{
                  //background: "black",
                  color: "white",
                  fontSize: "1.2rem",
                }}
              >
                Project Link
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
