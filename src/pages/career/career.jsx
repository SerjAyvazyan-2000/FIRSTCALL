import React from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationSvg from "../../assets/svgIcons/1 (5).svg"
import "./style.scss"
const Career = () => {
    return <section className="career_section">
          <AnimationHeader
              title={'CAREERS CENTER'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit HOME'}
              image={animationSvg}
          />
    </section>
};

export default Career;