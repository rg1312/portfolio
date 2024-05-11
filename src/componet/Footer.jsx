import React from "react";

function Footer() {
  return (
    <>
      <div
        className="f-container"
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          justifyContent:"center",
          minHeight: "96vh",
          // height:'100vh',
        }}
      >
        <span className="text-style1">Have a project in mind?</span>
        <div className="visible">
          <span className="text-style2">✺ Let's Chat</span>
        </div>
        <a
          href="mailto:hellodev281@gmail.com"
          className="text-style3"
          style={{
            color: "black",
            fontFamily: "Satoshi,sans-serif",
            letterSpacing: "1px",
            fontSize: "2rem",
            marginTop: "2%",
            letterSpacing: "-1px",
            paddingLeft: "15px",
          }}
        >
          {" "}
          hellodev281@gmail.com
        </a>

        <hr style={{ marginTop: "5%" ,width:'90%', margin:'5%'}}></hr>


        <div className="links" >
          <div class="flip-text ">
            <a href="mailto:hellodev281@gmail.com" style={{ color: "black" }}>
              <span data-text="Mail">Mail</span>
            </a>
          </div>
          <div class="flip-text">
            <a
              href="https://www.linkedin.com/in/dev-gajjar-318493309/"
              style={{ color: "black" }}
            >
              <span data-text="Linkedin">Linkedin</span>
            </a>
          </div>
          <div class="flip-text">
            <a href="https://github.com/DevGajjar28" style={{ color: "black" }}>
              {" "}
              <span data-text="GitHub">GitHub</span>
            </a>
          </div>
        </div>
        
      </div>
      
      
    </>
  );
}

export default Footer;
