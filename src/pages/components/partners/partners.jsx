import React, {useRef} from 'react';
import "./style.scss"
import useIntersection from "../../hooks/useIntersection ";
const Partners = () => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)
    return <section ref={lastElement} className="partners_section">
        <div className="G-container">
            <div className={"partners_title"}>
                <h3 className={isVisible ? "active" : null}>PARTNERS</h3>
                <p>We offer more than the usual call centre routine. Our rbroad portfolio ranges from B2B cold calling
                    and
                    existing customer care, to sales assistance, creation of CRM workflows, to complex sales consulting
                    and
                    training for your team. Learn more on our detailed service page.</p>
            </div>
            <div className="partners_items">
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>

                </div>
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>

                </div>
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>

                </div>
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>


                </div>
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>

                </div>
                <div className="partners_item">
                    <div className="partners_item_bg"></div>
                    <span className="icon-Frame-2"></span>

                </div>

            </div>
        </div>
    </section>

};

export default Partners;