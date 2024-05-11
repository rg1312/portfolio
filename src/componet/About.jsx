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
            I'm Dev, fresh out of graduation and ready to dive headfirst into
            the world of frontend development. While I'm gearing up for my
            master's journey, my true passion lies in crafting real-time,
            engaging web experiences.
            <br />
            <p style={{ marginTop: "5%" }}>
              I'm all about turning concepts into captivating digital realities.
              With a knack for adaptability and effective communication, I'm
              ready to work with any technology stack. Let's connect and build
              something awesome together! Whether it's a coding challenge or
              just a friendly chat, I'm game! 🚀
            </p>
          </span>
          <a href="mailto:hellodev@gmail.com" className="about-style3">
            Let's Connect &nbsp;&rarr;
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
