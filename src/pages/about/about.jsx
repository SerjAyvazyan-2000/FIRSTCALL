import React from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationSvg from "../../assets/svgIcons/about us.svg"

const About = () => {
    return <section className="about_section">
          <AnimationHeader
              title={"ABOUT US"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit HOME"}
              image={animationSvg}
          />
    </section>
};

export default About;