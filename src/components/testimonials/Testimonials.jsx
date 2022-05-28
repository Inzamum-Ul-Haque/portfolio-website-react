import React from "react";
import "./testimonials.css";
import AVATR1 from "../../assets/coderstrust.jpg";
import AVATR2 from "../../assets/css.jpg";
import AVATR3 from "../../assets/google_it_support.jpg";
import AVATR4 from "../../assets/html.jpg";
import AVATR5 from "../../assets/excel.jpg";
import AVATR6 from "../../assets/resume.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATR1,
    name: "Responsive Web Design",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR2,
    name: "Introduction to CSS3",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR3,
    name: "Google IT Support",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR4,
    name: "HTML5",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR5,
    name: "Excel Skills for Business",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
  {
    avatar: AVATR6,
    name: "Resume Writing",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus aperiam aspernatur quia hic sed alias modi quasi. Corrupti et veritatis minima fuga ipsa non dolorem temporibus explicabo repudiandae sint.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>External Courses</h5>
      <h2>Certifications</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
