import React from "react";

function About() {
  return (
    <>
      <div className="a-container">
        <span className="about-style1" style={{ textAlign: "center" }}>
          About me
        </span>
        <div className="a-visible">
          <span className="about-style2">
            I'm Rahil, As a Cloud Support Engineer with several years of experience in the industry, my objective is to utilize my skills and knowledge
            to provide efficient and effective solutions for clients. With a dedication to customer satisfaction and a strong background in
            cloud computing.
            <br />
            <p style={{ marginTop: "5%" }}>
            My strong communication skills enable me to collaborate effectively with cross-functional teams and provide exceptional customer support. 
            I stay updated on the latest cloud technologies and best practices to deliver innovative solutions. 
            Problem-solving is at the core of my work, and I thrive in fast-paced environments. 🚀
            </p>
          </span>
          <a href="mailto:rahilgajjar910@gmail.com" className="about-style3">
            Let's Connect &nbsp;&rarr;
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
