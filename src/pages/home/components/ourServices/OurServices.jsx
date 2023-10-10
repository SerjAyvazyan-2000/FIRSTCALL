import React, {useEffect, useRef, useState} from 'react';
import "./style.scss"
import {motion} from "framer-motion";
import servicesDarkImg1 from "../../../../assets/images/Rectangle 921 (1).png"
import servicesImg1 from "../../../../assets/images/Property 1=Default.png"
import servicesDarkImg2 from "../../../../assets/images/servisecDark2.png"
import servicesImg2 from "../../../../assets/images/services2.png"
import servicesDarkImg3 from "../../../../assets/images/servicesDark3.png"
import servicesImg3 from "../../../../assets/images/Property 1=Default (2).png"


const OurServices = () => {
    const [changeImg, setChangeImg] = useState(true)


    const textAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }
    const featuredAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.1}
        })
    }

    return <>
        <motion.section initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2}}
                        className="section_our_services">
            <div className="G-container">
                <div className="section_our_services_content">
                    <div className="container">

                        <div className="our_services_title">
                            <motion.h3 custom={1} variants={textAnimation}>Our passion, your performance: tailor-made
                                sales strategies that make the
                                difference!
                            </motion.h3>
                            <motion.p custom={2} variants={textAnimation}>All three Ws shown in one graphic</motion.p>

                        </div>

                        <div className='our_services_content'>
                            <div  className="our_services_content_items">

                                <motion.div initial={'hidden'} whileInView={'visible'}   className="our_services_content_item ">
                                    <motion.div custom={4} variants={featuredAnimation} className="content_item_text">
                                        <h3>Why </h3>
                                        <p>Our passion is to help businesses achieve and exceed their sales goals. We
                                            believe that
                                            through
                                            our expertise in telephone sales and our commitment to excellence and
                                            quality,
                                            we can
                                            help
                                            our
                                            clients succeed and effectively market their products or services. We
                                            believe
                                            that
                                            building
                                            strong and lasting relationships with
                                            clients and providing tailored solutions can make a significant
                                            difference. </p>
                                        <span>"It is a game" we don't work for the individual appointment or quick turnover - we work for the cause.</span>
                                    </motion.div>

                                    <motion.div custom={4} variants={featuredAnimation} className="content_item_img_block G-center">
                                        <div className="content_image_body">
                                            <img src={servicesImg1} alt=""/>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div initial={'hidden'} whileInView={'visible'} className="our_services_content_item  ">
                                    <motion.div custom={4} variants={featuredAnimation} className="content_item_img_block  G-center">
                                        <div className="content_image_body ">
                                            <img src={servicesImg2} alt=""/>
                                        </div>
                                    </motion.div>

                                    <motion.div custom={4} variants={featuredAnimation} className="content_item_text">
                                        <h3>HOW </h3>
                                        <p>We achieve this by specialising in consultancy-intensive products and IT
                                            solutions and
                                            offering a customised service. Our dedicated employees deepen their
                                            knowledge of
                                            our
                                            clients' products and services and fully identify with them. We work
                                            exclusively
                                            for
                                            each
                                            client and do not take on other clients who might compete with them. We use
                                            lean
                                            and
                                            efficient sales strategies,
                                            transparent processes and intensive customer relations to find the ideal
                                            time
                                            for our
                                            customers' offers. </p>
                                    </motion.div>

                                </motion.div>

                                <motion.div initial={'hidden'} whileInView={'visible'} className="our_services_content_item">

                                    <motion.div custom={3} variants={featuredAnimation}   className="content_item_text">
                                        <h3>WHAT </h3>
                                        <p>Our services include B2B cold calling, sales assistance, social selling, CRM
                                            process
                                            design,
                                            creation of dynamic BI dashboards, sales process consulting and training of
                                            internal
                                            teams.
                                            We also provide a seamless transition to our clients' systems and deliver
                                            weekly
                                            reports
                                            with relevant KPIs to continuously optimise their sales strategy.
                                            Our extensive service portfolio ranges from appointment qualification to
                                            training of
                                            internal call centres. </p>
                                    </motion.div>

                                    <motion.div custom={3} variants={featuredAnimation}  className="content_item_img_block  G-center">
                                        <div className="content_image_body content_item_img_width ">
                                            <img src={servicesImg3} alt=""/>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>

    </>
};

export default OurServices;