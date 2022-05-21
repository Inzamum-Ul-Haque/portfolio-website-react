import React from "react";
import "./testimonials.css";
import AVATR1 from "../../assets/avatar1.jpg";
import AVATR2 from "../../assets/avatar2.jpg";
import AVATR3 from "../../assets/avatar3.jpg";
import AVATR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVATR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
