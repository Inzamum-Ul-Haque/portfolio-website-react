import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Inzamum
      </a>
      <a
        href="https://www.google.com/maps/place/BCCP+Rd,+Dhaka+1216/@23.8159888,90.3668486,20z/data=!4m5!3m4!1s0x3755c128cc048d5b:0x4a2a1ef00b2b4566!8m2!3d23.8162232!4d90.3675393"
        target="_blank"
        className="footer__address"
      >
        <p>Road-03, House-10, Block-A Section-11, Mirpur-1216</p>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Projects</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Inzamum-Ul-Haque. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
