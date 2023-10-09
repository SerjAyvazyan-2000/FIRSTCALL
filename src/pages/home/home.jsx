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
import rotateLogo from "../../assets/images/rotateLogo.png"
import {motion, px} from "framer-motion"
import TelephoneSales from "../components/telefonSales/telephoneSales";
import useIntersection from "../hooks/useIntersection ";


const Home = () => {

    const homeSection = useRef(null);
    const buttonRef = useRef()
    const observer = useRef(null);
    const [scale, setScale] = useState(false)
    const {isVisible} = useIntersection(observer, homeSection)


    const [scrollLine, setScrollLine] = useState(0)


    const mouseOver = (e) => {
        if (!scale) {
            setScale(true)

        }
    }
    const onMouseOut = (e) => {
        if (scale) {
            setScale(false)
        }

    }
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


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollLine(window.scrollY)
        })

    }, [])


    return <>

        <div className="G-container">
            <div className='svg_line_block'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1356" height="3899" viewBox="0 0 1356 3899" fill="none">
                    <path d="M789.613 3897.5L789.613 3605.85L789.613 3218L789.613 2890.71C789.613 2888.5 791.404
                 2886.71 793.613 2886.71L991.211 2886.71C991.732 2886.71 992.248 2886.6 992.73
                 2886.41L1351.94 2738.94C1353.45 2738.33 1354.43 2736.87 1354.43 2735.24L1354.43
                 2391.57C1354.43 2389.36 1352.63 2387.57 1350.43 2387.57L589.515
                 2387.57C587.305 2387.57 585.515 2385.78 585.515 2383.57L585.515
                     2276.89C585.515 2274.68 583.724 2272.89 581.515 2272.89L236.886
                      2272.89C234.677 2272.89 232.886 2271.1 232.886 2268.89L232.886
                       1970.28L232.886 1791.9C232.886 1789.69 234.677 1787.9 236.886
                        1787.9L1127.13 1787.9C1129.34 1787.9 1131.13 1786.11 1131.13
                         1783.9L1131.13 1715.15L1131.13 1524.15C1131.13 1521.94 1132.92
                          1520.15 1135.13 1520.15L1350.43 1520.15C1352.63 1520.15 1354.43
                           1518.36 1354.43 1516.15L1354.43 1261.49L1354.43 829.5C1354.43 827.291 1352.6 825.5 1350.39 825.5C848.093 825.511 507.333 827.49 5.03713 827.501C2.82799 827.501 1.0005 825.71 1.0005 823.501L1.00049 1"
                          stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                          style={{strokeDasharray: '177, 277', strokeDashoffset: scrollLine}}/>
                </svg>
            </div>
        </div>

        <motion.section ref={homeSection} initial={'hidden'} whileInView={'visible'} className="section_telephone_sales">
            <div className="G-container">
                <div className={isVisible ? "section_telephone_sales_content active " : "section_telephone_sales_content"}>
                    <div className="container ">

                        <div className={isVisible ? "telephone_sales_body active" : "telephone_sales_body"}>

                            <div className="telephone_sales_content">
                                <motion.div custom={3} variants={textAnimation} className="telephone_sales_text">
                                    <h1>Excellence in telephone sales</h1>
                                    <p>We turn your goals into successes!</p>
                                    <button onMouseOut={onMouseOut} onMouseOver={mouseOver} ref={buttonRef}
                                            className="excellence-btn">L’ets start
                                    </button>
                                </motion.div>
                                <div className={scale ? " telephone_sales_img hover" : "telephone_sales_img"}>
                                    <img src={image} alt=""/>
                                </div>
                            </div>

                            <div className={isVisible ? "home_ellipse_block active" : "home_ellipse_block"}>
                                <div className="home_ellipse_large">
                                    <div className="home_ellipse_medium">
                                        <div className="home_ellipse_small">
                                            <div className="home_ellipse_img">
                                                <img src={ellipse} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </motion.section>

        <section className="section_rotate_logo">
            <div className="G-container">
                <div className="rotate_logo_block">
                    <div className={`rotate_logo`}>
                        <img src={rotateLogo} alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <OurServices/>
        <TelephoneSales/>

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