import React, {useRef} from 'react';
import "./style.scss"
import image from "../../../assets/images/image.png"
import image1 from "../../../assets/images/image1.png"
import image2 from "../../../assets/images/image2.png"
import image3 from "../../../assets/images/image3.png"
import image4 from "../../../assets/images/image4.png"
import image5 from "../../../assets/images/image5.png"
import useIntersection from "../../hooks/useIntersection ";

const CommonProblems = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)

    return <section ref={lastElement} className="common_problems_section">
        <div className="G-container">
            <div className="common_problems_absolute"></div>
            <div className="common_problems_body">
                <div className="common_problems_title">
                    <h3 className={isVisible ? "active" : null} >Common problems in B2B new customer acquisition</h3>
                    <p>Maximise your efficiency, visibility and profitability</p>
                </div>
                <div className="common_problems_list">
                    <div className="common_problems_red_items">

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className="icon-bankrupt"></i>
                                {/*<img src={image} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>High advertising costs</p>

                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
                            </div>
                            <span className="icon-Arrow-21"></span>
                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className='icon-decision'></i>
                                {/*<img src={image1} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Unsteady source of customers</p>
                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
                            </div>

                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className='icon-workflow'></i>
                                {/*<img src={image2} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Time-intensive cold calling</p>
                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
                            </div>

                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className='icon-sharing'></i>
                                {/*<img src={image3} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Lack of market presence</p>
                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
                            </div>

                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className='icon-qualified'></i>

                                {/*<img src={image4} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Unqualified leads</p>
                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
                            </div>

                            <span className="icon-Arrow-21"></span>

                        </div>
                        <div className="common_problems_red_item">
                            <div className="common_problems_red_item_img">
                                <i className='icon-decision-making-1'></i>

                                {/*<img src={image5} alt=""/>*/}
                            </div>
                            <div className="common_problems_red_item_text">
                                <p>Difficult to reach decision-makers</p>
                            </div>
                            <div className="problems_item_sub_text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum
                                    itaque magni
                                    quibusdam quidem. Beatae consequuntur
                                    culpa dicta dolor explicabo, fugiat iste, nisi numquam odit perferendis quasi
                                    quidem
                                    quis repellendus!
                                </p>
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
                                <i className="icon-customer-service"></i>
                                {/*<img src={image} alt=""/>*/}
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>High advertising costs</p>


                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <i className="icon-bankrupt"></i>
                                {/*<img src={image1} alt=""/>*/}
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Unsteady source of customers</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <i className='icon-customer-service'></i>
                                {/*<img src={image2} alt=""/>*/}
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Time-intensive cold calling</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <i className="icon-high-visibility"></i>
                                {/*<img src={image3} alt=""/>*/}
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Lack of market presence</p>


                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <i className="icon-filter"></i>
                                {/*<img src={image4} alt=""/>*/}
                            </div>
                            <div className="common_problems_black_item_text">
                                <p>Unqualified leads</p>
                            </div>
                            <span className="icon-Arrow-21"></span>

                        </div>

                        <div className="common_problems_black_item">
                            <div className="common_problems_black_item_img">
                                <i className="icon-decision"></i>
                                {/*<img src={image5} alt=""/>*/}
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