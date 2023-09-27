import React from 'react';
import "./style.scss"
import image from "../../../assets/images/image.png"
import image1 from "../../../assets/images/image1.png"
import image2 from "../../../assets/images/image2.png"
import image3 from "../../../assets/images/image3.png"
import image4 from "../../../assets/images/image4.png"
import image5 from "../../../assets/images/image5.png"

const CommonProblems = () => {
    return <section className="common_problems_section">
        <div className="container">
            <div className="common_problems_absolute"></div>
            <div className="common_problems_body">
                <div className="common_problems_title">
                    <h3>Common problems in B2B new customer acquisition</h3>
                    <p>Maximise your efficiency, visibility and profitability</p>
                </div>
                <div className="common_problems_list">
                    <div className="common_problems_red_items">

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>High advertising costs</p>
                            </div>
                            <span className="icon-Arrow-21"></span>
                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image1} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Unsteady source of customers</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image2} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Time-intensive cold calling</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image3} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Lack of market presence</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image4} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Unqualified leads</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>
                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <img src={image5} alt=""/>
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Difficult to reach decision-makers</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                    </div>

                    <div className="common_problems_list_text_block">
                        <div className="problems_list_text_icon">
                            <span className="icon-carbon_security"></span>
                        </div>
                        <div className="common_problems_list_text">
                            <p>“WE ARE THE BRIDGE TO YOUR BUSINESS SUCCESS”</p>
                        </div>
                        <div className="problems_list_text_icon">
                            <span className="icon-carbon_security"></span>
                        </div>

                    </div>

                    <div className="common_problems_black_items">
                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>High advertising costs</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image1} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Unsteady source of customers</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image2} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Time-intensive cold calling</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image3} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Lack of market presence</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image4} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Unqualified leads</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <img src={image5} alt=""/>
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Difficult to reach decision-makers</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                    </div>

                    <div className="common_problems_list_footer">
                        <p>"From appointment qualification to training - Our service portfolio is your competitive
                            advantage". Benefit from our comprehensive range of services that goes far beyond classic
                            cold calling. We support you in winning new customers, maintaining existing customers and
                            optimising your sales strategy. Our service includes maintaining your CRM systems,
                            developing new markets via
                            social networks and training your internal team in cold calling and call centre
                            operations.</p>
                    </div>

                </div>
            </div>
        </div>
    </section>

};

export default CommonProblems;