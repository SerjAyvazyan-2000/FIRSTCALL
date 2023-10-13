import React from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationSvg from "../../assets/svgIcons/about us.svg"
import useInformation from "../hooks/useInformation";
import AboutItem from "./components/aboutItem/AboutItem";
import "./style.scss"
import aboutValues1 from "../../assets/svgIcons/aboutValues1.svg"
import aboutValues2 from "../../assets/svgIcons/aboutValues2.svg"
import aboutValues3 from "../../assets/svgIcons/aboutValues3.svg"
import aboutValues4 from "../../assets/svgIcons/aboutValues4.svg"
import aboutValues5 from "../../assets/svgIcons/fi_5110900 (1).svg"
import aboutValues6 from "../../assets/svgIcons/fi_1355174 (2).svg"
import about from "../../assets/images/aboutTeam.png"
import about1 from "../../assets/images/image 273.png"

import logo from "../../assets/images/Vector.png";
import ConsultationForm from "../home/components/consultation/ consultation";


const About = () => {
    const {aboutUs} = useInformation()
    return <section className="about_section">

        <div className="about_animation_top_block">
            <div className="G-container">

                <div className="about_top_section_body">

                    <div className="animation_text_content">
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit HOME</p>
                    </div>

                    <div className="about_animation_top_image">
                        <img src={animationSvg} alt=""/>
                    </div>

                </div>

            </div>
        </div>

        <div className="container">
            <div className="about_us_list">
                {aboutUs.map(item => (
                    <AboutItem key={item.id} reverse={item.reverse} item={item}/>
                ))}
            </div>
        </div>
        <div className="container">
            <div className="about_values">

                <div className="about_values_title">
                    <h3 className="G-center">our values</h3>
                    <p>What drives us and what distinguishes us from other sales agencies</p>
                </div>

                <div className="about_values_list">
                    <div className="values_list_item G-center">
                        <img src={aboutValues1} alt=""/>
                    </div>
                    <div className="values_list_item G-center">
                        <img src={aboutValues2} alt=""/>
                    </div>
                    <div className="values_list_item G-center">
                        <img src={aboutValues3} alt=""/>
                    </div>
                </div>

            </div>
        </div>

        <div className="G-container">
            <div className="about_distinguishes_body">
                <div className="distinguishes_body_text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Cursus sit aliquam orci in lobortis condimentum est.
                        Molestie ornare leo viverra diam ut morbi. Pellentesque lectus urna ante sit lorem nec aliquet
                        aliquam massa. Ultrices ultrices mattis vestibulum quis dictumst imperdiet orci eleifend massa.
                        Lorem ipsum dolor sit amet consectetur. Cursus sit aliquam orci in lobortis condimentum est.
                        Molestie ornare leo viverra diam ut morbi. Pellentesque lectus urna ante sit lorem nec aliquet
                        aliquam massa. Ultrices ultrices mattis vestibulum quis dictumst imperdiet orci eleifend
                        massa.Lorem ipsum dolor sit amet consectetur. Cursus sit aliquam orci in lobortis condimentum
                        est. Molestie ornare leo viverra diam ut morbi. Pellentesque lectus urna ante sit lorem nec
                        aliquet aliquam massa. Ultrices ultrices
                        mattis vestibulum quis dictumst imperdiet orci eleifend massa.Lorem ipsum dolor sit amet
                        consectetur.
                    </p>
                    <p>
                        Cursus sit aliquam orci in lobortis condimentum est. Molestie ornare leo viverra diam ut morbi.
                        Pellentesque lectus urna ante sit lorem nec aliquet aliquam massa. Ultrices ultrices mattis
                        vestibulum quis dictumst imperdiet orci eleifend massa.Lorem ipsum dolor sit amet consectetur.
                        Cursus sit aliquam orci in lobortis condimentum est. Molestie ornare leo viverra diam ut morbi.
                        Pellentesque lectus urna ante sit
                        lorem nec aliquet aliquam massa. Ultrices ultrices mattis vestibulum quis dictumst imperdiet
                        orci eleifend massa.
                    </p>
                </div>

                <div className="about_distinguishes_img_block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="490" height="490" viewBox="0 0 500 500">
                        <rect width="500" height="500" fill="none" stroke="black" strokeWidth="4"
                              strokeDasharray="10 15"/>
                    </svg>

                    <div className="about_distinguishes_img_block_border">
                        <div className="about_distinguishes_red_block">
                            <div className="about_distinguishes_white_block">
                                <img src={logo} alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="about_distinguishes_img distinguishes_row1  ">
                        <img src={aboutValues4} alt=""/>
                    </div>
                    <div className="about_distinguishes_img  distinguishes_row2  ">
                        <div className="img_block">
                            <img src={aboutValues5} alt=""/>
                        </div>
                    </div>
                    <div className="about_distinguishes_img distinguishes_row3 ">
                        <div className="img_block">
                            <img src={aboutValues6} alt=""/>
                        </div>
                    </div>


                </div>


            </div>
        </div>


        <div className="G-container">
            <div className="about_our_team">

                <div className="our_team_title">
                    <h3 className="G-center">our values</h3>
                    <p>What drives us and what distinguishes us from other sales agencies</p>
                </div>

                <div className="about_our_team_people">
                    <div className="people_item">
                        <div className="people_item_content">
                            <div className="people_item_bg"></div>
                            <img src={about} alt=""/>
                        </div>
                        <div className="people_item_name">
                            <h3>Annette Black</h3>
                            <p>Specialist</p>
                        </div>

                    </div>
                    <div className="people_item">

                        <div className="people_item_content">
                            <div className="people_item_bg"></div>
                            <img src={about} alt=""/>
                        </div>
                        <div className="people_item_name">
                            <h3>Annette Black</h3>
                            <p>Specialist</p>
                        </div>

                    </div>
                    <div className="people_item">

                        <div className="people_item_content">
                            <div className="people_item_bg"></div>
                            <img src={about1} alt=""/>
                        </div>
                        <div className="people_item_name">
                            <h3>Annette Black</h3>
                            <p>Specialist</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div className='about_consultation_block'>
            <ConsultationForm/>
        </div>

    </section>
};

export default About;