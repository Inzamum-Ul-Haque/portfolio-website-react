import React from "react";
import "./testimonials.css";
import AVATR1 from "../../assets/avatar1.jpg";
import AVATR2 from "../../assets/avatar2.jpg";
import AVATR3 from "../../assets/avatar3.jpg";
import AVATR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
