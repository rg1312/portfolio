import React, { useState } from "react";
import imgs1 from "../assets/rs1.svg";
import imgs2 from "../assets/rs2.svg";
import imgs3 from "../assets/rs3.svg";
import imgs4 from "../assets/rs4.svg";
import imgs5 from "../assets/rs5.svg";
import imgs6 from "../assets/rs6.svg";
import imgs7 from "../assets/rs7.svg";
import imgs8 from "../assets/rs8.svg";
import imgs9 from "../assets/rs9.svg";
import sskill1 from "../assets/ss1.svg";
import sskill2 from "../assets/ss2.svg";
import sskill3 from "../assets/ss3.svg";
import sskill4 from "../assets/ss4.svg";
import sskill5 from "../assets/ss5.svg";
import sskill6 from "../assets/ss6.svg";

function Skill() {
  const [activeTab, setActiveTab] = useState("coding");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <div className="tabs" style={{ marginTop: "5%" }}>
        <button
          className={`tab ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => handleTabClick("coding")}
        >
          Technical Skills
        </button>
        <button
          className={`tab ${activeTab === "soft" ? "active" : ""}`}
          onClick={() => handleTabClick("soft")}
        >
          Soft Skills
        </button>
      </div>
      <div className="content">
        <div
          className={`tab-content ${activeTab === "coding" ? "active" : ""}`}
        >
          <div className="box">
            <img src={imgs1} alt="Azure" />
            <p>Azure</p>
          </div>
          <div className="box">
            <img src={imgs2} alt="Linux" />
            <p>Linux</p>
          </div>
          {/* Add more coding boxes as needed */}
          <div className="box">
            <img src={imgs3} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="box">
            <img src={imgs4} alt="Docker" />
            <p>Docker</p>
          </div>
          <div className="box">
            <img src={imgs5} alt="Jenkins" />
            <p>Jenkins</p>
          </div>
          <div className="box">
            <img src={imgs6} alt="Ansible" />
            <p>Ansible</p>
          </div>

          <div className="box">
            <img src={imgs7} alt="Git" />
            <p>Git</p>
          </div>
          <div className="box">
            <img src={imgs8} alt="GitLab" />
            <p>GitLab</p>
          </div>
          <div className="box">
            <img src={imgs9} alt="Chef" />
            <p>Chef</p>
          </div>

        </div>
        
        <div className={`tab-content ${activeTab === "soft" ? "active" : ""}`}>
          <div className="box">
            <img src={sskill1} alt="Communication" />
            <p>Communication</p>
          </div>
          <div className="box">
            <img src={sskill2} alt="Collaboration" />
            <p>Collaboration</p>
          </div>
          {/* Add more soft skill boxes as needed */}
          <div className="box">
            <img src={sskill3} alt="Adaptability" />
            <p>Adaptability</p>
          </div>
          <div className="box">
            <img src={sskill4} alt="Time Management" />
            <p>Time Management</p>
          </div>
          <div className="box">
            <img src={sskill5} alt="Problem Solving" />
            <p>Problem Solving</p>
          </div>
          <div className="box">
            <img src={sskill6} alt="Creativity" />
            <p>Creativity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
