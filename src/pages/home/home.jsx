import React, {useEffect, useRef} from 'react';
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


const Home = () => {

    return <>
        <section className="section_telephone_sales ">

            <div className="container">
                <div className="telephone_sales_body">
                    <div className="telephone_sales_text">
                        <h3>Excellence in telephone sales</h3>
                        <p>We turn your goals into successes!</p>
                        <button className="excellence-btn">L’ets start</button>
                    </div>
                    <div className="telephone_sales_img">
                        <img src={image} alt=""/>
                    </div>

                </div>
            </div>
        </section>
        <section className="home_ellipse">
            <div className="home_ellipse_img">
                <img src={ellipse} alt=""/>
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
    </>
};

export default Home;