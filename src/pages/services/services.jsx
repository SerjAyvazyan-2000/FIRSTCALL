import React from 'react';
import "./style.scss"
import {motion} from "framer-motion";
import useInformation from "../hooks/useInformation";
import {NavLink} from "react-router-dom";
import DistinguishesUs from "../home/components/distinguishesUs/distinguishesUs";
import ConsultationForm from "../home/components/consultation/ consultation";
import IconSvg from "./IconSvg";


const Services = () => {
    const {servicesList} = useInformation()

    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }
    return <section className="services_section">

        <div className="services_header_block">
            <div className="G-container">
                <div className="services_top_section_body ">
                    <motion.div initial="hidden" whileInView="visible" className="services_animation_text_content">
                        <motion.h3 variants={textAnimation} custom={3}>SERVICES</motion.h3>
                        <motion.div className={'animation_text_content_info'} variants={textAnimation} custom={3}>
                            <p>From appointment qualification to training - Our service portfolio is your competitive
                                advantage</p>
                            <p>Benefit from our comprehensive range of services that goes far beyond classic cold
                                calling. We support you in winning new customers, maintaining existing customers and
                                optimising your sales strategy. Our service includes maintaining your CRM systems,
                                developing new markets via social networks
                                and training your internal team in cold calling and call centre operations. </p>
                        </motion.div>

                    </motion.div>

                </div>

            </div>
            <div className="services_animation_content-image">
                {/*<img className="logo_img" src={animationSvg} alt=""/>*/}
                <IconSvg/>
            </div>
        </div>
        <div className="services_list_body">
            <div className="G-container">
                <div className="services_list">
                    {servicesList.map((item, index) => {
                        return <div className="services_list_item">
                            <h3>{item.name}</h3>
                            <NavLink>{item.link}</NavLink>
                            <p>{item.description}</p>
                        </div>
                    })}
                </div>

            </div>
        </div>
        <div className="services_line"></div>
        <div className="services_distinguishes_Us">
            <DistinguishesUs lineSlider={false}/>

        </div>
        <div className="services_gap"></div>

        <ConsultationForm/>

    </section>

}


export default Services;