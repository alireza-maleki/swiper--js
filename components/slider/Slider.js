import React, { useRef, useState } from "react";
import classes from "./Slider.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
// import { Pagination, Navigation } from "swiper";
import { Navigation } from "swiper";


import 'swiper/css';
import "swiper/css/navigation";

import Button from "../buttonNavSwiper/Button";



const Slider = () => {


    const dataPic = [
        { id: '1', picSrc: './images/1.jpg' },
        { id: '2', picSrc: './images/2.jpg' },
        { id: '3', picSrc: './images/3.jpg' },
        { id: '4', picSrc: './images/4.jpg' },
        { id: '5', picSrc: './images/5.jpg' },
        { id: '6', picSrc: './images/6.jpg' },
        { id: '7', picSrc: './images/7.jpg' },
    ];


    return (
        <Swiper
            className={classes.swiper}
            // slidesPerView={3}

            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                },
                1400: {
                    slidesPerView: 3
                },
            }}

        >
            {
                dataPic.map((item) => (
                    <SwiperSlide key={item.id} className={classes['swiper-slide']}>

                        <div className="card" style={{ width: '16.1rem' }}>
                            <img className="card-img-top" src={item.picSrc} alt="Card image cap" />
                            <div className="card-body">
                                <h6 className={`card-title ${classes['card-title']}`}>
                                    {/* &zwnj; */}
                                    گوشی موبایل مدل
                                    Iphone 13 pro Max 256GB 6GB
                                </h6>
                                <p className="card-text text-start">
                                    <span>80,000,000</span>
                                    &zwnj;
                                    &zwnj;
                                    &zwnj;
                                    <span>تومان</span>
                                </p>
                                <div className="text-start">
                                    &zwnj;
                                    <span>
                                        4,8
                                    </span>
                                    &zwnj;
                                    <del className="ps-3">85,000,000</del>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))
            }

            <Button />

            {/* <div className={classes['swiper-button-prev']}>
                <BiRightArrowAlt className={` swiper-button-prev ${classes['arrow-prev']}`} />
            </div>

            <div className={classes['swiper-button-nex']}>
                <BiLeftArrowAlt className={`swiper-button-next ${classes['arrow-next']}`} />
            </div> */}

        </Swiper>
    )
}

export default Slider;