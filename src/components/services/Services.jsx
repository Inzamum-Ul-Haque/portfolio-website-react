import React from "react";
import "./services.css";
/*import { BiCheck } from "react-icons/bi";*/

const Services = () => {
  return (
    <section id="services">
      <h5>What I Have Done So Far</h5>
      <h2>Projects</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Projects</h3>
          </div>

          <ul className="service__list">
            <li>
              <a href="http://twardrobe.com/starbucks/" target="_blank">
                <h6>Starbucks Landing Page</h6>
                <p>Landing page design using JavaScript and CSS.</p>
              </a>
            </li>

            <li>
              <a
                href="http://twardrobe.com/parallex_scrolling/"
                target="_blank"
              >
                <h6>Parallex Scrolling Website</h6>
                <p>Developed using JS, HTML and CSS.</p>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Inzamum-Ul-Haque/Piano-Project"
                target="_blank"
              >
                <h6>Piano Project</h6>
                <p>Built a simple piano using JavaScript, HTML and CSS.</p>
              </a>
            </li>

            <li>
              <a href="http://twardrobe.com/animated_text/" target="_blank">
                <h6>CSS Effects</h6>
                <p>Various CSS effects</p>
              </a>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software and Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>E-Commerce Mobile App - Android Project</h6>
                <p>Developed an E-Commerce mobile app using Android Studio.</p>
              </a>
            </li>

            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>E-Commerce Website - Web Development Project 1</h6>
                <p>
                  Developed a beginner level frontend E-Commerce website using
                  HTML, CSS, PHP and MySQL.
                </p>
              </a>
            </li>

            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>E-Commerce Website - Web Development Project 2</h6>
                <p>
                  Developed a beginner level frontend E-Commerce website using
                  HTML, CSS and Wordpress.
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Inzamum-Ul-Haque/E-Tuition"
                target="_blank"
              >
                <h6>E-Tuition - Web Development Project 3</h6>
                <p>
                  Developed the frontend part of an educational website using
                  C#, React JS and MVC Model.
                </p>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Inzamum-Ul-Haque/Database-Project"
                target="_blank"
              >
                <h6>Smart Canteen Management - Software Development Project</h6>
                <p>
                  Developed a database management software using core java, java
                  swing and netbeans
                </p>
              </a>
            </li>

            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>
                  Artificial Intelligence React News App - Web Development
                  Project
                </h6>
                <p>
                  Currently working on React project using ALAN AI and
                  JavaScript
                </p>
              </a>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>ML Projects</h3>
          </div>

          <ul className="service__list">
            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>Weather Prediction Analysis</h6>
                <p>
                  Prediction of weather on given weather data, prepared with
                  Python and Google Colab by using some Machine Learning
                  Algorithms.
                </p>
              </a>
            </li>

            <li>
              <a href="https://github.com/Inzamum-Ul-Haque" target="_blank">
                <h6>A Movie Recommendation System</h6>
                <p>
                  Movie recommender system prepared with Python and Google
                  Colab.
                </p>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
