import React from "react";
import "./about.css";
import ME from "../../assets/me-about-2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiArtificialHive } from 'react-icons/gi';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />

              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <GiArtificialHive className="about__icon" />

              <h5>ML Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />

              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Keen to pursue a career in professional services with a focus on
            Software Development, Data Analysis and Security sectors. Have
            specialisation in frontend and backend Web Development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
