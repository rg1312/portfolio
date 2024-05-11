import React, { useEffect } from "react";
import gsap from "gsap";

function Cursor() {
  useEffect(() => {
    // Set initial positions for cursor and follower
    gsap.set(".cursor", { xPercent: -10, yPercent: -10 });

    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".cursor");

      // Update cursor position
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

      // Update follower position with GSAP animation
      gsap.to(cursor, { duration: 0.5, left: e.pageX, top: e.pageY });
    };

    // Event listener for scroll
    const handleScroll = () => {
      const cursor = document.querySelector(".cursor");
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Update follower position with GSAP animation
      gsap.to(cursor, { duration: 0.5, left: scrollX, top: scrollY });
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
    </>
  );
}

export default Cursor;
