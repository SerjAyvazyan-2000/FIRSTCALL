import React, {useRef} from 'react';
import "./style.scss"
import useIntersection from "../../hooks/useIntersection ";
const Portfolio = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)

    return <section ref={lastElement} className="services_portfolio">
        <div className='G-container'>
            <div className="services_portfolio_body">

                <div className="services_portfolio_title">
                    <h3 className={isVisible ? "active" : null}>SERVICES PORTFOLIO</h3>
                    <p>We offer more than the usual call centre routine. Our rbroad portfolio ranges from B2B cold
                        calling
                        and
                        existing customer care, to sales assistance, creation of CRM workflows,
                        to complex sales consulting and training for your team. Learn more on our detailed service
                        page.</p>
                </div>

                <div className="services_portfolio_items">
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null} >B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i>With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>
                    <div className="services_portfolio_item">
                        <h3 className={isVisible ? "active" : null}>B2B cold calling Sales assistance</h3>
                        <p>Qualified appointment of new customers, existing customer care and reactivation.</p>
                        <span>  We take care of the qualified appointment of new customers, existing customer care and reactivation.</span>
                        <i >With us as your partner, you have more time to focus on your core tasks while
                            we open up new business opportunities for you and strengthen the loyalty of your existing
                            customers.</i>
                    </div>

                </div>

                <div className="services_portfolio_tools">
                    <button className="portfolio_tools_red_button">More about portfolio
                    </button>

                    <button className="portfolio_tools_white_button">CONTACT US
                        <span className="icon-arrow-down-right2"></span>
                    </button>
                </div>

            </div>

        </div>

    </section>

};

export default Portfolio;