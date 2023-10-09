import React, {useRef} from 'react';
import "./style.scss"
import user from "../../../../assets/images/user.png"
import user1 from "../../../../assets/images/users1.png"
import rotateLogo from "../../../../assets/images/rotateLogo.png";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import arrowLeft from "../../../../assets/svgIcons/ArrowLeft (6).svg"
import arrowRight from "../../../../assets/svgIcons/ArrowLeft (7).svg"
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import useIntersection from "../../../hooks/useIntersection ";

const Testimonials = () => {

    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)

    return <section ref={lastElement} className="testimonials_section">

        <div className="G-container">
            <section className="section_rotate_logo">
                <div className="G-container">
                    <div className="testimonials_logo_block">
                        <div className={`testimonials_rotate_logo`}>
                            <img src={rotateLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <div className={isVisible ? "testimonials_body active" : 'testimonials_body'}>
                <div className="testimonials_body_title">
                    <h3>Testimonials</h3>
                    <p>See what our clients say about our services and how we helped them achieve their goals.</p>
                </div>
                <div className="arrow-right">
                    <img src={arrowRight} alt=""/>
                </div>
                <div className="container">

                    <div className="testimonials_clients_slider">
                        <Swiper
                            slidesPerView={2}
                            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                },
                                800:{
                                    slidesPerView:2,
                                },


                            }}


                        >

                            <SwiperSlide>

                                <div className="testimonials_slider_item">
                                    <div className="testimonials_clients_red_block_img">
                                        <img src={user} alt=""/>
                                    </div>
                                    <div className="testimonials_clients_red_block_text">
                                        <h3>Sophia Murphy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
                                            nunc </p>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials_slider_item">
                                    <div className="testimonials_clients_white_block_img">
                                        <img src={user1} alt=""/>
                                    </div>
                                    <div className="testimonials_clients_white_block_text">
                                        <h3>Sophia Murphy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
                                            nunc </p>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="testimonials_slider_item">
                                    <div className="testimonials_clients_red_block_img">
                                        <img src={user} alt=""/>
                                    </div>
                                    <div className="testimonials_clients_red_block_text">
                                        <h3>Sophia Murphy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
                                            nunc </p>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testimonials_slider_item">
                                    <div className="testimonials_clients_white_block_img">
                                        <img src={user1} alt=""/>
                                    </div>
                                    <div className="testimonials_clients_white_block_text">
                                        <h3>Sophia Murphy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
                                            nunc </p>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

                <div className="arrow-left">
                    <img src={arrowLeft} alt=""/>
                </div>

                <div className={isVisible ? "testimonials_more_btn active" : "testimonials_more_btn"}>
                    <button>Load MORE</button>
                </div>

            </div>
        </div>

    </section>
};

export default Testimonials;