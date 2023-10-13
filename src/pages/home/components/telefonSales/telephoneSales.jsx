import React, {useRef} from 'react';
import "./style.scss"
import {motion, px} from "framer-motion"

import useIntersection from "../../../hooks/useIntersection ";
const TelephoneSales = () => {

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
    return <>
        <motion.section initial={'hidden'} whileInView={'visible'} ref={lastElement} className="our_telephone_sales_section">
            <div className="container">
                <motion.div custom={2} variants={textAnimation} className="our_telephone_sales_content">
                    <h3>"We set the standards in B2B telephone sales - Let's take off together".</h3>
                    <span>Irma Kern</span>
                </motion.div>
            </div>
        </motion.section>


        {/*<div className={isVisible ? "telephone_middle_border active" : "telephone_middle_border"}></div>*/}

    </>
};

export default TelephoneSales;