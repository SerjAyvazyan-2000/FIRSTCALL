import React, {useRef, useState} from 'react';
import {Form} from "react-router-dom";
import "./style.scss"
import arrow from "../../../../assets/svgIcons/ArrowDownRight (5).svg"
import useIntersection from "../../../hooks/useIntersection ";

const ConsultationForm = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)
    const [examp,setExam] = useState(false)
    const handleClick = () => {
        setExam(!examp)
    }
    return <>
        <section ref={lastElement} className="consultation_section">
            <div className="G-container">
                <div className="consultation_body">

                    <div className="consultation_text">
                        <h3>Ready to take your sales processes to the next level?</h3>
                        <a href="">CONTACT US
                            <img src={arrow} alt=""/>
                        </a>
                    </div>
                    <form className="consultation_form">
                        <div className="form_title">
                            <h3>Arrange a free consultation</h3>

                        </div>
                        <div className="consultation_form_inputs">
                            <div className="input_block">
                                <span>Your full name* </span>

                                <label htmlFor="">
                                    <input type="text" placeholder="First and Last name"/>
                                </label>
                            </div>
                            <div className="input_block">
                                <span>Your email * </span>

                                <label htmlFor="">
                                    <input type="email" placeholder="youremail@gmail.com"/>
                                </label>
                            </div>

                            <div className="input_block select_block">
                                <span>Phone Number*</span>
                                <label>
                                    <select className="form-select" id="phone" name="+49">
                                        <option value="">+49</option>
                                        <option value="599">Curacao +599</option>
                                        <option value="357">Cyprus +357</option>
                                        <option value="420">Czech Republic +420</option>

                                    </select>
                                    <input type="text" placeholder="000 000 000"/>
                                </label>
                            </div>

                            <div  className={"remember_me"}>
                                <label className={examp ? "active" : ''}>
                                    <input  onClick={handleClick} type="checkbox"/>

                                    <p>I have read the privacy policy and agree to
                                        the processing of personal data.</p>
                                </label>

                            </div>
                            <button className="form_contact_button">SEND NOW</button>

                        </div>
                    </form>
                </div>
            </div>
        </section>

    </>
};

export default ConsultationForm;