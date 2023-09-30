import React, {useEffect, useRef, useState} from 'react';
import "./style.scss"
import image from "../../assets/images/Rectangle.png"
import ellipse from "../../assets/images/Group 8206.png"
import OurServices from "../components/ourServices/OurServices";
import Partners from "../components/partners/partners";
import Portfolio from "../components/portfolio/portfolio";
import CommonProblems from "../components/commonProblems/commonProblems";
import Testimonials from "../components/testimonials/testimonials";
import DistinguishesUs from "../components/distinguishesUs/distinguishesUs";
import CooperationWork from "../components/cooperationWork/cooperationWork";
import ConsultationForm from "../components/consultation/ consultation";
import Consultation from "../components/consultation/ consultation";
import rotateLogo from "../../assets/images/rotateLogo.png"
import { motion } from "framer-motion"


const Home = () => {
    const ref = useRef()
    const [scale, setScale] = useState(false)
    const mouseOver = (e) => {
        if (!scale) {
            setScale(true)

        }
    }
    const onMouseOut = (e) => {
        if(scale){
            setScale(false)
        }

    }
    const textAnimation = {
        hidden:{
            y:200,
            opacity:0,
        },
        visible:{
            y:0,
            opacity:1
        }
    }
    return <>
        <motion.section initial={'hidden'} whileInView={'visible'} className="section_telephone_sales ">
            <div className="container container_before">
                <div className="telephone_sales_body">

                    <motion.div variants={textAnimation} className="telephone_sales_text">
                        <h3>Excellence in telephone sales</h3>
                        <p>We turn your goals into successes!</p>
                        <button onMouseOut={onMouseOut} onMouseOver={mouseOver} ref={ref}
                                className="excellence-btn">L’ets start
                        </button>
                    </motion.div>


                    <div className={scale ? " telephone_sales_img hover" : "telephone_sales_img"}>
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </motion.section>
        <section className="home_ellipse">
            <div className="home_ellipse_img">
                <img src={ellipse} alt=""/>
            </div>
        </section>

        <section className="home_rotate_logo">
            <div className="G-container">
                <div className={ `rotate_logo`}>
                    <img src={rotateLogo} alt=""/>
                </div>
            </div>

        </section>

        <OurServices/>
        <section className="our_telephone_sales_section">
            <div className="container">
                <div className="our_telephone_sales_content">
                    <h3>"We set the standards in B2B telephone sales - Let's take off together".</h3>
                    <span>Irma Kern</span>
                </div>
            </div>
        </section>
        <Partners/>
        <Portfolio/>
        <CommonProblems/>
        <Testimonials/>
        <DistinguishesUs/>
        <CooperationWork/>
        <ConsultationForm/>
    </>
};

export default Home;