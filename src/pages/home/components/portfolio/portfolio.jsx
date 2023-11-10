import React, {useRef} from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import arrowImg from "../../../../assets/svgIcons/ArrowDownRight.svg"
import useIntersection from "../../../hooks/useIntersection ";
import {motion, px} from "framer-motion"

const Portfolio = () => {
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
    const featuredAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }
    return <motion.section ref={lastElement} initial={'hidden'} whileInView={'visible'} className="services_portfolio">
        <div className='G-container'>
            <div className="services_portfolio_body">
                <motion.div custom={2} variants={textAnimation} className="services_portfolio_title">
                    <h3 className={isVisible ? "active" : null}>SERVICES PORTFOLIO</h3>
                    <p>We offer more than the usual call centre routine. Our rbroad portfolio ranges from B2B cold
                        calling
                        and
                        existing customer care, to sales assistance, creation of CRM workflows,
                        to complex sales consulting and training for your team. Learn more on our detailed service
                        page.</p>
                </motion.div>

                <motion.div whileInView={'visible'} initial={'hidden'} className="services_portfolio_items">
                    <motion.Link custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null} >B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.Link>
                    <motion.NavLink custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.NavLink>
                    <motion.NavLink custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.NavLink>
                    <motion.NavLink custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.NavLink>
                    <motion.NavLink custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.NavLink>
                    <motion.NavLink custom={3} variants={featuredAnimation} className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i >With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </motion.NavLink>

                </motion.div>

                <div className="services_portfolio_tools">
                    <button className="portfolio_tools_red_button">
                        More about portfolio
                    </button>

                    <button className="portfolio_tools_white_button">CONTACT US
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <g clip-path="url(#clip0_1195_16337)">
                                <path d="M9.25063 9.25061L27.7506 27.7506" stroke="#191923" stroke-width="1.24376" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7194 27.7506H27.7506V12.7194" stroke="#191923" stroke-width="1.24376" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1195_16337">
                                    <rect width="37" height="37" rx="2.74074" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

            </div>

        </div>

    </motion.section>

};

export default Portfolio;