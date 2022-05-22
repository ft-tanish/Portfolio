import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import "swiper/css"
const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quam ut, quis at iste, architecto excepturi expedita porro inventore et ex ipsa cumque debitis natus modi, eius optio repellat?"
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quam ut, quis at iste, architecto excepturi expedita porro inventore et ex ipsa cumque debitis natus modi, eius optio repellat?"
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quam ut, quis at iste, architecto excepturi expedita porro inventore et ex ipsa cumque debitis natus modi, eius optio repellat?"
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quam ut, quis at iste, architecto excepturi expedita porro inventore et ex ipsa cumque debitis natus modi, eius optio repellat?"
        }
    ]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span> Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2"style = {{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination = {{clickable: true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

            </Swiper>
        
    </div>
  )
}

export default Testimonials