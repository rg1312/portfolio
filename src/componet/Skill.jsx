import React, { useState } from "react";
import imgs1 from "../assets/skill2.svg";
import imgs2 from "../assets/skill3.svg";
import imgs3 from "../assets/skill4.svg";
import imgs4 from "../assets/skill5.svg";
import imgs5 from "../assets/skill1.svg";
import imgs6 from "../assets/skill6.png";
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
          Coding Skills
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
            <img src={imgs1} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="box">
            <img src={imgs2} alt="CSS3" />
            <p>CSS3</p>
          </div>
          {/* Add more coding boxes as needed */}
          <div className="box">
            <img src={imgs3} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="box">
            <img src={imgs4} alt="React" />
            <p>React</p>
          </div>
          <div className="box">
            <img src={imgs5} alt="Accessibility" />
            <p>Accessibility</p>
          </div>
          <div className="box">
            <img src={imgs6} alt="Responsive" />
            <p>Responsive</p>
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
