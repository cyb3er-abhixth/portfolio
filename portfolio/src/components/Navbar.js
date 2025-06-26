// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1500">
          Abhinav <span>Arun.</span>
        </div>
        <div className="links">
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <Link to="/about">About</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <Link to="/skills">Skills</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <Link to="/works">Works</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <Link to="/services">Services</Link>
          </div>
          <div
            className="link"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <i
          className="fa-solid fa-bars hamburg"
          onClick={() => {
            const navbar = document.querySelector(".dropdown");
            navbar.style.transform = "translateY(0px)";
          }}
        ></i>
      </div>
      <div className="dropdown">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/works">Works</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <i
            className="fa-solid fa-xmark cancel"
            onClick={() => {
              const navbar = document.querySelector(".dropdown");
              navbar.style.transform = "translateY(-500px)";
            }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
