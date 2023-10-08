import React, {useRef} from 'react';
import "./style.scss"
import image from "../../../assets/images/contract 1.png"
import image1 from "../../../assets/images/computer 1.png"
import image2 from "../../../assets/images/calendar 1.png"

import useIntersection from "../../hooks/useIntersection ";

const CooperationWork = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)
    return <>
    <section ref={lastElement} className='cooperation_work_section'>
        <div className="G-container">
            <div className="cooperation_title">
                <h3>How does the cooperation work</h3>
            </div>
            <div className="cooperation_list">


                <div className="cooperation_list_item">
                    <div className="cooperation_list_item_border"></div>
                 <div className="cooperation_item_img">
                     <span className="icon-introduction"></span>
                 </div>
                    <div className="cooperation_item_text_block">
                        <div className="cooperation_item_text_before">1</div>
                        <div className="cooperation_item_text">
                            <p>
                                Initial Contact and Introduction
                                In the first step, we get to know each other and collectively
                                evaluate whether a collaboration would be mutually beneficial.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_item_border"></div>
                    <div className="cooperation_item_img">
                        <img src={image} alt=""/>
                    </div>
                    <div className="cooperation_item_text_block">
                        <div className="cooperation_item_text_before">2</div>
                        <div className="cooperation_item_text">
                            <p>
                                Contract Signing
                                We sign a legally compliant and GDPR-compliant sales
                                agreement to ensure that all business and data protection aspects are covered.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="cooperation_list_item">
                    <div className="cooperation_list_item_border"></div>
                    <div className="cooperation_item_img">
                        <span className="icon-cloud-computing"></span>
                    </div>
                    <div className="cooperation_item_text_block">
                        <div className="cooperation_item_text_before">3</div>
                        <div className="cooperation_item_text">
                            <p>
                                Contract Signing
                                We sign a legally compliant and GDPR-compliant sales
                                agreement to ensure that all business and data protection aspects are covered.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_item_border"></div>
                    <div className="cooperation_item_img">
                        <img src={image1} alt=""/>
                    </div>
                    <div className="cooperation_item_text_block">
                        <div className="cooperation_item_text_before">4</div>
                        <div className="cooperation_item_text">
                            <p>
                                CRM Account Setup
                                A personal CRM account is set up to efficiently manage all customer data and interactions.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_item_border"></div>
                    <div className="cooperation_item_img">
                        <img src={image2} alt=""/>
                    </div>
                    <div className="cooperation_item_text_block">
                        <div className="cooperation_item_text_before">5</div>
                        <div className="cooperation_item_text">
                            <p>
                                Contract Signing
                                We sign a legally compliant and GDPR-compliant sales
                                agreement to ensure that all business and data protection aspects are covered.
                            </p>
                        </div>
                    </div>

                </div>



            </div>

            <div className="cooperation_btn">
                <button>make an appointment </button>
            </div>
        </div>
    </section>
            <div className={isVisible ? "telephone_middle_border active" : "telephone_middle_border"}></div>

    </>
};

export default CooperationWork;