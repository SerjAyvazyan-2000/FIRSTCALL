import React, {useRef} from 'react';
import "./style.scss"
import icon from "../../../../assets/svgIcons/icon-park-outline_circular-connection (3).svg"
import icon1 from "../../../../assets/svgIcons/carbon_security (1).svg"
import icon3 from "../../../../assets/svgIcons/satisfaction (1) (1).svg"
import icon4 from "../../../../assets/svgIcons/call-center-agent (1) (1).svg"
import useIntersection from "../../../hooks/useIntersection ";
import {motion, px} from "framer-motion"


const CommonProblems = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)

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

    return <section ref={lastElement} className="common_problems_section">
        <div className="G-container">
            <div className="common_problems_absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="1650" height="600">
                    <rect width="1650" height="600" fill="none" stroke="black" strokeWidth="4" strokeDasharray="10 15"/>
                </svg>
            </div>

            <div className="common_problems_body">
                <motion.div  initial={'hidden'} whileInView={'visible'} className="common_problems_title">
                    <motion.h3 variants={textAnimation} custom={3} className={isVisible ? "active" : null}>Common problems in B2B new customer acquisition</motion.h3>
                    <motion.p variants={textAnimation} custom={3}>Maximise your efficiency, visibility and profitability</motion.p>
                </motion.div>


                    <div className="common_problems_content">

                        <motion.div  initial={'hidden'} whileInView={'visible'} className="common_problems_scroll_block">

                            <motion.div variants={textAnimation} custom={3} className="common_problems_scroll">
                                <div className="common_problems_red_items">


                                    <div className="common_problems_red_item">
                                        <div className="common_problems_red_item_img">
                                            <i className="icon-wallet"></i>
                                        </div>
                                        <div className="common_problems_red_item_text">
                                            <p>High advertising costs</p>

                                        </div>

                                        <div className="problems_item_sub_text">
                                            <p>
                                                Advertising on platforms such as
                                                Facebook, Instagram and LinkedIn is becoming increasingly
                                                expensive. This increases the cost of generating suitable leads,
                                                which reduces profit margins.
                                            </p>
                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                    </div>


                                    <div className="common_problems_red_item">
                                        <div className="common_problems_red_item_img change_icon_to_image">
                                            <img src={icon3} alt=""/>
                                        </div>
                                        <div className="common_problems_red_item_text">
                                            <p>Unsteady source of customers</p>
                                        </div>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                Companies often do not know
                                                where the next customer will come from. Their order book
                                                depends heavily on referrals and their network, which is not a
                                                continuous or reliable source of new clients.
                                            </p>
                                        </div>

                                        <span className="icon-Arrow-21"></span>

                                    </div>



                                    <div className="common_problems_red_item">
                                        <div className="common_problems_red_item_img">
                                            <i className='icon-workflow'></i>
                                        </div>
                                        <div className="common_problems_red_item_text">
                                            <p>Time-intensive cold calling</p>
                                        </div>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                Many companies are so involved in
                                                their day-to-day business and serving their existing customers
                                                that they hardly have time for cold calling. The time needed for
                                                telephone canvassing is often lacking.
                                            </p>
                                        </div>

                                        <span className="icon-Arrow-21"></span>

                                    </div>

                                    <div className="common_problems_red_item">
                                        <div className="common_problems_red_item_img">
                                            <i className='icon-sharing'></i>
                                        </div>
                                        <div className="common_problems_red_item_text">
                                            <p>Lack of market presence</p>
                                        </div>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                Despite excellent services and results,
                                                many companies have difficulties to be perceived by their target
                                                group. They struggle to increase their visibility in the market so
                                                that potential clients do not approach them on their own.
                                            </p>
                                        </div>

                                        <span className="icon-Arrow-21"></span>

                                    </div>

                                    <div className="common_problems_red_item">
                                        <div className="common_problems_red_item_img">
                                            <i className='icon-qualified'></i>
                                        </div>
                                        <div className="common_problems_red_item_text">
                                            <p>Unqualified leads</p>
                                        </div>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                Many companies generate enquiries for
                                                their services, but these leads are often unsuitable or unable to
                                                afford the company's offer. This leads to inefficient use of
                                                resources and a missed opportunity for qualified business.
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
                                                Especially in larger
                                                companies with many employees, it can be difficult to reach
                                                managing directors or other decision-makers. This can make
                                                acquisition difficult and slow down business development.
                                            </p>
                                        </div>

                                        <span className="icon-Arrow-21"></span>

                                    </div>

                                </div>

                                <div className="common_problems_list_text_block">
                                    <div className="problems_list_text_icon ">
                                        <img src={icon} alt=""/>
                                    </div>
                                    <div className="common_problems_list_text">
                                        <p>“WE ARE THE BRIDGE TO YOUR BUSINESS SUCCESS”</p>
                                    </div>
                                    <div className="problems_list_text_icon">
                                        <img src={icon1} alt=""/>
                                    </div>

                                </div>

                                <div className="common_problems_black_items">
                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img">
                                            <i className="icon-customer-service"></i>
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Building a continuous source of customers</p>


                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                Through our specialised telephone sales services, we help you
                                                expand your customer base and constantly generate new leads.
                                                With us, your customer acquisition will be less about sporadic
                                                referrals and more about a steady flow of potential customers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img">
                                            <i className="icon-bankrupt"></i>
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Reduction of expensive advertisements</p>
                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                We use efficient sales strategies that focus on building long-term
                                                relationships with customers and identifying the ideal time for
                                                your offer. Our customised services can help you reduce
                                                advertising costs and increase your profits.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img change_icon_to_image">
                                            <img src={icon4} alt=""/>
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Time-saving cold calling</p>
                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                With us, you can spend more time on your core business and less
                                                on time-consuming cold calling. Our dedicated team takes care of
                                                the telephone acquisition and ensures that you always receive
                                            </p>
                                        </div>
                                    </div>

                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img">
                                            <i className="icon-high-visibility"></i>
                                            {/*<img src={image3} alt=""/>*/}
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Increasing visibility in the market</p>


                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                We help you to increase your visibility in the market and to be
                                                noticed by your target group. With our support, you can
                                                strengthen your market position and establish yourself as a
                                                trustworthy provider.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img">
                                            <i className="icon-filter"></i>
                                            {/*<img src={image4} alt=""/>*/}
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Generation of qualified leads</p>
                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                By focusing on consultancy-intensive products and IT solutions,
                                                we ensure that you only receive qualified enquiries. We help you
                                                get leads who value your offer and can afford it.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="common_problems_black_item">
                                        <div className="common_problems_black_item_img">
                                            <i className="icon-decision"></i>
                                            {/*<img src={image5} alt=""/>*/}
                                        </div>
                                        <div className="common_problems_black_item_text">
                                            <p>Access to decision-makers in large companies</p>
                                        </div>
                                        <span className="icon-Arrow-21"></span>
                                        <div className="problems_item_sub_text">
                                            <p>
                                                We specialise in reaching CEOs and other decision-makers in
                                                large companies. Our customised services and extensive
                                                expertise enable us to make the right contacts even in complex
                                                corporate structures.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>

                        </motion.div>

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