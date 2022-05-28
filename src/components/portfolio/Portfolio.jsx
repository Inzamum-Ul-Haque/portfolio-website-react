import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Tuition",
    sub_title: "An Educational Website",
    demo: "https://www.youtube.com/watch?v=WwX4X7LMe94",
  },
  {
    id: 2,
    image: IMG2,
    title: "T-Wardrobe Mobile App",
    sub_title: "An E-Commerce Mobile App",
    demo: "https://www.facebook.com/fmahmud.alvee/posts/2343301689315302",
  },
  {
    id: 3,
    image: IMG3,
    title: "Parallex Website Design",
    sub_title: "A UI/UX Design",
    demo: "https://www.linkedin.com/posts/inzamum-ul-haque-09a321180_htmlabrcssabrjavascript-activity-6813128341865005056-gk5f?utm_source=linkedin_share&utm_medium=member_desktop_web",
  },
];

const Portfolio = () => {
  return (
  <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, sub_title , demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{sub_title }</h5>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Video Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
