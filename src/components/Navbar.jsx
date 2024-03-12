import React, { useState, useEffect } from "react";
import logo from "../assets/img/airbnb-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Listen for scrolling event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolling ? "nav-scrolled" : ""}>
      <img src={logo} className="nav--logo" />
    </nav>
  );
}
