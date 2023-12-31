import React from 'react'
import { services } from '../../Data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './services.css'
import ShapeTwo from '../../assets/shape-2.png';


const Services = () => {
  return (
    <section className="services section" id="services">

      <h2 className="section__title text-cs">What I do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper">
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className='services__items card card-one'>
              <span className='services__subtitle text-cs'>{name}</span>
              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>

              <img src={ShapeTwo} alt='' className='shape c__shape' />
            </SwiperSlide>

          )
        })}



      </Swiper>

      <div className="section__deco deco__right">
      </div>
    </section>

  )
}

export default Services