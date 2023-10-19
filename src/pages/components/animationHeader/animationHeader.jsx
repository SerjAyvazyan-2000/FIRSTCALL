import React, {useRef, useState} from 'react';
import "./style.scss"
import {motion} from "framer-motion";

const AnimationHeader = ({title, subTitle, description, image}) => {
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


    return <section className="animate_top_section">
        <div className="G-container">
            <div className="top_section_body ">
                <motion.div initial="hidden" whileInView="visible" className="animation_text_content">
                    <motion.h3 variants={textAnimation} custom={3}>{title}</motion.h3>
                    <motion.p variants={textAnimation} custom={3}>{description}</motion.p>
                </motion.div>
                <div className="animation_content-image">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    </section>
};

export default AnimationHeader;