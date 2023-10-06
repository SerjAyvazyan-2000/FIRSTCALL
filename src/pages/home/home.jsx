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
import useGetPosition from "../hooks/getPosition";


const Home = () => {

    const homeSection = useRef(null);
    const buttonRef = useRef()
    const observer = useRef(null);
    const svgLeftLine = useRef()
    const svgTopLine = useRef()
    const path = useRef()
    const [scale, setScale] = useState(false)
    const {isVisible} = useIntersection(observer, homeSection)
    const [topBorderStart, setTopBorderEnd] = useState(false)
    const [sectionInfo, setSectionInfo] = useState({
        sectionY: 0,
        scrollY: 0
    })


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
    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    // const  getSectionInfo = () => {
    //     window.addEventListener("scroll", () => {
    //         const sectionHeight = homeSection.current.getBoundingClientRect().height;
    //         setSectionInfo((prevState) => (
    //             {...prevState, scrollY: window.scrollY, sectionY: sectionHeight}
    //
    //
    //         ))
    //     })
    //
    // }
    //
    // useEffect(() => {
    //     getSectionInfo()
    //
    // }, [])
    //
    // useEffect(() => {
    //     let lineLength = svgLeftLine.current.getTotalLength()
    //     // svgLeftLine.current.style.strokeDashoffset = lineLength + '' + lineLength
    //     window.addEventListener("scroll",()=>{
    //         let scrollPercentage = (sectionInfo.sectionY) / (sectionInfo.scrollY)
    //         let drawLength = lineLength * scrollPercentage
    //         // svgLeftLine.current.style.lineDashoffset = lineLength - drawLength
    //
    //     })
    // }, [])
    //
    // useEffect(() => {
    //     let lineLength = svgTopLine.current.getTotalLength()
    //     svgTopLine.current.style.strokeDashoffset = lineLength + ' ' + lineLength
    //     window.addEventListener("scroll",()=>{
    //         let scrollPercentage = (sectionInfo.sectionY) / (sectionInfo.scrollY)
    //         let drawLength = lineLength * scrollPercentage
    //         svgTopLine.current.style.lineDashoffset = lineLength - drawLength
    //
    //     })
    // }, [])


    return <>
        <motion.section ref={homeSection} initial={'hidden'} whileInView={'visible'}
                        className="section_telephone_sales">
            <div className="G-container">

                <div className={isVisible ? "section_telephone_sales_content active " : "section_telephone_sales_content"}>
                    <div className={isVisible ? "left_border_block active" : 'left_border_block'}></div>

                    <div className="container ">
                        <div className={isVisible ? "telephone_sales_body active" : "telephone_sales_body"}>
                            <div className="telephone_sales_content">
                                <motion.div variants={textAnimation} className="telephone_sales_text">
                                    <h3>Excellence in telephone sales</h3>
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
                <div className={isVisible ? "left_border_block active" : 'left_border_block'}></div>
                <div className={isVisible ? "border_top_block active" : "border_top_block"}></div>
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