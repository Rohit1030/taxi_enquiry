import React from "react";
import './Hero.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import hero from "../data/hero.json"

const Hero = () => {
  return (
    <>
    <Swiper 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]} 
      className="mySwiper" 
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
      {
        hero.hero.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.image} alt="hero image" className="hero-images" />
              <div className="overlay"></div>
              <div className="hero-data">
                <h1 className="hero-heading">{item.heading}</h1>
                <h3 className="hero-subheading">{item.subheading}</h3>
                <button className="hero-read">Read more</button>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </>
  )
}

export default Hero