import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useInformation from "../../../hooks/useInformation";
import "./style.scss"
import carersImg from "../../../../assets/images/careersDetails.png"
import ConsultationForm from "../../../home/components/consultation/ consultation";
import facebook from "../../../../assets/svgIcons/FacebookLogo (1).svg"
import twitter from "../../../../assets/svgIcons/TwitterLogo (1).svg"
import telegram from "../../../../assets/svgIcons/TelegramLogo (1).svg"

const RolesDetails = () => {
    const params = useParams()
    const {rolesList} = useInformation()
    const [rolesItem, setRolesItem] = useState({})

    useEffect(() => {
        if (rolesList.length) {
            let result = rolesList.filter(item => item.id === +params.id)
            if (result[0]) {
                setRolesItem(result[0])
            }
        }
    }, [])

    return <section className="roles_item_details">
        <div className="G-container">
            <div className="roles_details_body">

                <div className="roles_details_top_content">
                    <div className="roles_details_top_text">
                        <div className="top_text_title">{rolesItem.title}</div>
                        <div className="sub_top_text">
                            <h3>ttention, sales cracks! We are looking for sales talents who are really into telesales.
                                Our company is a powerhouse for software solutions across various industries,
                                and we are looking for dedicated inside sales people (m/f/d) to join our dream
                                team. </h3>
                            <p>Attention, sales cracks! We are looking for sales talents who are really into telesales.
                                Our company is a powerhouse for software solutions across various industries, and we are
                                looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just
                                sell - we really put our heart and soul into individual, expert advice that blows our
                                customers away. </p>

                            <p>Attention, sales cracks! We are looking for sales talents who are really into telesales.
                                Our company is a powerhouse for software solutions across various industries, and we are
                                looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just
                                sell - we really put our heart and soul into individual, expert advice that blows our
                                customers away. </p>
                        </div>
                        <div className="sub2_top_text">
                            <div className="sub2_top_text_title">Duties:</div>
                            <p>Calendar King: You are the master of making appointments! Get ready to organize the field
                                like a pro and make the calendar glow.</p>
                            <p>Calendar King: You are the master of making appointments! Get ready to organize the field
                                like a pro and make the calendar glow.</p>
                            <p>Calendar King: You are the master of making appointments! Get ready to organize the field
                                like a pro and make the calendar glow.</p>
                            <p>Calendar King: You are the master of making appointments! Get ready to organize the field
                                like a pro and make the calendar glow.</p>

                        </div>
                    </div>
                    <div className="roles_details_image_content">
                        <div className="roles_details_image">
                            <img src={carersImg} alt=""/>

                        </div>
                        <div className="roles_details_image_text">
                            <p>Immerse yourself in a working world where you can really make a difference.
                                We can't wait to meet you!
                                Pull out all the stops and send us your application! We want to see everything: Cover
                                letter, resume, references - and don't forget to tell us what your salary expectations
                                are and when you can start.
                                Don't hesitate, put everything in an email and send it off to
                                kern@firstcallagency.de </p>
                            <p>We can't wait to hear from you! Let's make magic together!</p>
                        </div>

                        <div className="roles_share_job">
                            <div className="roles_share_job_icons">
                                <p>Share a job</p>
                                <a href="">
                                    <img src={facebook} alt=""/>
                                </a>
                                <a href="">
                                    <img src={telegram} alt=""/>
                                </a>
                                <a href="">
                                    <img src={twitter} alt=""/>
                                </a>
                            </div>
                            <div className="roles_share_job_btn">
                                <button>APPLY FOR A JOB</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="roles_bottom_text_content">
                    <div className="bottom_text_title">Requirements::</div>
                    <p>Calendar King: You are Get going with a colorful mix of B2B customers from the IT industry!
                        Boredom? Not the master of making appointments! Get ready to organize the field like a pro and
                        make the calendar glow.</p>
                    <p>Calendar King: You ar e Get going with a colorful mix of B2B customers from the IT industry!
                        Boredom? Not the master of making appointments! Get ready to organize the field like a pro and
                        make the calendar glow.</p>
                    <p>Calendar King: You are Get going with a colorful mix of B2B customers from the IT industry!
                        Boredom? Not the master of making appointments! Get ready to organize the field like a pro and
                        make the calendar glow.</p>
                    <p>Calendar King: You are Get going with a colorful mix of B2B customers from the IT industry!
                        Boredom? Not the master of making appointments! Get ready to organize the field like a pro and
                        make the calendar glow.</p>
                </div>


                <div className="roles_bottom_text_content">
                    <div className="bottom_text_title">We offer:::</div>
                    <p>Pure variety: Get going with a colorful mix of B2B Pure variety: Get going with a colorful mix of
                        B2B customers from the IT industry! Boredom? Not with u customers from the IT industry! Boredom?
                        Not with us!</p>
                    <p>Pure variety: Get going with a Get going with a colorful mix of B2B customers from the IT
                        industry! Boredom? Notcolorful mix of B2B customers from the IT industry! Boredom? Not with
                        us!</p>
                    <p>Pure variety: Get going with a Get going with a colorful mix of B2B customers from the IT
                        industry! Boredom? Not colorful mix of B2B customers from the IT industry! Boredom? Not with
                        us!</p>
                    <p>Pure variety: Get going with a Get going with a colorful mix of B2B customers from the IT
                        industry! Boredom? Not colorful mix of B2B customers from the IT industry! Boredom? Not with
                        us!</p>
                </div>


            </div>
        </div>
        <div className="mobile_roles">
            <div className="roles_details_image_text">
                <p>Immerse yourself in a working world where you can really make a difference.
                    We can't wait to meet you!
                    Pull out all the stops and send us your application! We want to see everything: Cover
                    letter, resume, references - and don't forget to tell us what your salary expectations
                    are and when you can start.
                    Don't hesitate, put everything in an email and send it off to
                    kern@firstcallagency.de </p>
                <p>We can't wait to hear from you! Let's make magic together!</p>
            </div>

            <div className="roles_share_job">
                <div className="roles_share_job_icons">
                    <p>Share a job</p>
                    <a href="">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="">
                        <img src={telegram} alt=""/>
                    </a>
                    <a href="">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
                <div className="roles_share_job_btn">
                    <button>APPLY FOR A JOB</button>
                </div>
            </div>
        </div>

        <div className='consultation_block'>
            <ConsultationForm/>

        </div>

    </section>

};

export default RolesDetails;