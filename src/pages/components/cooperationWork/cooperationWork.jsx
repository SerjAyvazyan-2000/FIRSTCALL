import React from 'react';
import "./style.scss"
import image from "../../../assets/images/image.png"
import image1 from "../../../assets/images/image1.png"
import image2 from "../../../assets/images/image2.png"
import image3 from "../../../assets/images/image3.png"
import image4 from "../../../assets/images/image4.png"
import image5 from "../../../assets/images/image5.png"

const CooperationWork = () => {
    return <section className='cooperation_work_section'>
        <div className="comtainer">
            <div className="cooperation_title">
                <h3>How does the cooperation work</h3>
            </div>
            <div className="cooperation_list">


                <div className="cooperation_list_item">
                    <div className="cooperation_list_border">
                        <div className="cooperation_list_item_img">
                            <img src={image} alt=""/>
                        </div>
                        <div className="cooperation_list_item_text">
                            <span>1</span>
                            <p>Initial Contact and Introduction
                                In the first step, we get to know each other and collectively evaluate whether a
                                collaboration would be mutually beneficial.</p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_border">
                        <div className="cooperation_list_item_img">
                            <img src={image1} alt=""/>
                        </div>
                        <div className="cooperation_list_item_text">
                            <span>1</span>
                            <p>Initial Contact and Introduction
                                In the first step, we get to know each other and collectively evaluate whether a
                                collaboration would be mutually beneficial.</p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_border">
                        <div className="cooperation_list_item_img">
                            <img src={image2} alt=""/>
                        </div>
                        <div className="cooperation_list_item_text">
                            <span>1</span>
                            <p>Initial Contact and Introduction
                                In the first step, we get to know each other and collectively evaluate whether a
                                collaboration would be mutually beneficial.</p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_border">
                        <div className="cooperation_list_item_img">
                            <img src={image3} alt=""/>
                        </div>
                        <div className="cooperation_list_item_text">
                            <span>1</span>
                            <p>Initial Contact and Introduction
                                In the first step, we get to know each other and collectively evaluate whether a
                                collaboration would be mutually beneficial.</p>
                        </div>
                    </div>

                </div>
                <div className="cooperation_list_item">
                    <div className="cooperation_list_border">
                        <div className="cooperation_list_item_img">
                            <img src={image5} alt=""/>
                        </div>
                        <div className="cooperation_list_item_text">
                            <span>1</span>
                            <p>Initial Contact and Introduction
                                In the first step, we get to know each other and collectively evaluate whether a
                                collaboration would be mutually beneficial.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
};

export default CooperationWork;