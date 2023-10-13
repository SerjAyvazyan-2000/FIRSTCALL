import React, {useRef, useState} from 'react';
import "./style.scss"

const AnimationHeader = ({title, subTitle, description, image}) => {


    return <section className="animate_top_section">
        <div className="G-container">
            <div className="top_section_body ">
                <div className="animation_text_content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="animation_content-image">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    </section>
};

export default AnimationHeader;