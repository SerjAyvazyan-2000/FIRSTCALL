import React, {useEffect, useRef, useState} from 'react';
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
import {motion, px} from "framer-motion"

const Testimonials = () => {

    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)
    const textAnimation  = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom =>({
            y: 0,
            opacity: 1,
            transition:{delay :custom * 0.1}
        })
    }
    const [rotation, setRotation] = useState(0);


    useEffect(() => {
        const handleScroll = () =>{
            const scrollY = window.scrollY;
            const rotationValue = scrollY * 0.5
            setRotation(rotationValue);
        }
        window.addEventListener("scroll",handleScroll )
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return <section ref={lastElement} className="testimonials_section">

        <div className="G-container">
            <section className="section_rotate_logo">
                <div className="G-container">
                    <div className="testimonials_logo_block">
                        <div className={`testimonials_rotate_logo`}>
                            <img style={{ transform: `rotate(${rotation}deg)` }} src={rotateLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <div className={isVisible ? "testimonials_body active" : 'testimonials_body'}>
                <motion.div initial={'hidden'} whileInView={'visible'} className="testimonials_body_title">
                    <motion.h3  custom={3} variants={textAnimation}>Testimonials</motion.h3>
                    <motion.p  custom={3} variants={textAnimation} >See what our clients say about our services and how we helped them achieve their goals.</motion.p>
                </motion.div>

                <motion.div initial={'hidden'} whileInView={'visible'}  className="container">

                    <motion.div custom={3} variants={textAnimation} className="testimonials_clients_slider">
                        <div className="arrow-right">
                            <img src={arrowRight} alt=""/>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            breakpoints={{

                                1280: {
                                    slidesPerView: 2,
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
                        <div className="arrow-left">
                            <img src={arrowLeft} alt=""/>
                        </div>


                    </motion.div>


                </motion.div>


                <div className={isVisible ? "testimonials_more_btn active" : "testimonials_more_btn"}>
                    <button>Load MORE</button>
                </div>

            </div>
        </div>

    </section>
};

export default Testimonials;