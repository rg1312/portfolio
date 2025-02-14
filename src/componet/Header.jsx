import React from "react";
import hello1 from "../assets/Hello.gif";
import dev1 from "../assets/final.svg";
import cv from "../assets/Rahil_Gajjar_CV.pdf"

function Header() {
  return (
    <>
      <header className="header">
        <div className="flip-text">
          <span data-text="Rahil" style={{ fontSize: "1.5rem" }}>
            Heyy
          </span>
        </div>
        <div className="right">
          <a
            href="mailto:rahilgajjar910@gmail.com"
            style={{
              color: "black",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: "200",
            }}
          >
            <span>Let's chat</span>
          </a>
        </div>
      </header>

      <div className="container">
        <span className="hello">
          Hello <img src={hello1} className="image" alt="Hello" />, I'm
        </span>
        <div className="text1">
          <span className="dev">Rahil Gajjar</span>
        </div>
        <div className="text2">
          <span className="animate-me">Cloud Support Engineer</span>
        </div>
        <div className="imagesec animate-image">
          <img src={dev1} alt="dev" />
        </div>

     
      </div>

         <div className="container">
          <a
            href={cv}
            download="Rahil_Gajjar_CV.pdf" // Specifies the name of the downloaded file
            style={{
              color: "black",
              fontFamily: "Satoshi, sans-serif",
              fontWeight: "200",
              textDecoration: "none",
              padding: "10px 20px",
              border: "2px solid black",
              borderRadius: "5px",
              marginTop: "20px",
              display: "inline-block",
            }}
          >
            Download CV
          </a>
        </div>
    </>
  );
}

export default Header;
