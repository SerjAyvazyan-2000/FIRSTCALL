import React, {useRef, useState} from 'react';
import "./style.scss"
import useIntersection from "../../hooks/useIntersection ";

const AnimationHeader = ({title, subTitle, description, image}) => {


    return <section className="animate_top_section">

                <div className="top_section_text_block">
                    <div className="G-container">
                        <div className="animation_text_content">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>

                    </div>
                </div>

                <div className="animation_header_image">
                    <img src={image} alt=""/>
                </div>
    </section>
};

export default AnimationHeader;