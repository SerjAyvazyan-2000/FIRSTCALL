import React, {useRef} from 'react';
import "./style.scss"
import useIntersection from "../../../hooks/useIntersection ";
const TelephoneSales = () => {

    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)

    return <>
        <section ref={lastElement} className="our_telephone_sales_section">
            <div className="container">
                <div className="our_telephone_sales_content">
                    <h3>"We set the standards in B2B telephone sales - Let's take off together".</h3>
                    <span>Irma Kern</span>
                </div>
            </div>
        </section>


        {/*<div className={isVisible ? "telephone_middle_border active" : "telephone_middle_border"}></div>*/}

    </>
};

export default TelephoneSales;