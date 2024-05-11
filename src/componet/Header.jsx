import React from "react";
import hello1 from "../assets/Hello.gif";
import dev1 from "../assets/final.svg";

function Header() {
  return (
    <>
      <header className="header">
        {/* <div className="left">
          <span data-text="Dev">Dev Gajjar</span>
        </div> */}
        <div class="flip-text ">
          <span data-text="Dev" style={{ fontSize: "1.5rem" }}>
            Heyy
          </span>
        </div>
        <div className="right">
          {/* <p>Project</p> */}
          <a
            href="mailto:hellodev281@gmail.com"
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
          Hello <img src={hello1} className="image"></img> ,i'm
        </span>
        <div className="text1">
          <span className="dev">Dev Gajjar</span>
        </div>
        <div className="text2">
          <span className="animate-me">Frontend Developer</span>
        </div>
        <div className="imagesec animate-image">
          <img src={dev1} alt="dev" />
        </div>
      </div>
    </>
  );
}

export default Header;
