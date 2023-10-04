import React, {useEffect, useRef, useState} from 'react';
import "./style.scss"
import servicesImg from "../../../assets/images/Property 1=Default (1).png"
import servicesImg1 from "../../../assets/images/Property 1=Default.png"
import servicesImg2 from "../../../assets/images/Property 1=Default (2).png"
import AnimatedLeftBorder from "../../UI/animatedLeftBorder/animatedLeftBorder";
import AnimatedCenterBorder from "../../UI/animatedCenterBorder/animatedCenterBorder";
import AnimatedRightBorder from "../../UI/animatedRightBorder/animatedRightBorder";
import useIntersection from "../../hooks/useIntersection ";
import useGetPosition from "../../hooks/getPosition";


const OurServices = () => {
    const [activeElement, setActiveElement] = useState(null);
    const [centerParent, setCenterParent] = useState(0);
    const [imgCenter, setImgCenter] = useState();
    const itemParent = useRef(0)
    const itemImg = useRef(0)
    const elementChild1 = useRef(0)
    const elementChild2 = useRef(0)
    const elementChild3 = useRef(0)
    const lastElement = useRef(null);
    const observer = useRef(null);
    const borderParent = useRef()
    const [example,setExample] = useState(false)

    const {isVisible} = useIntersection(observer, lastElement)
    const {getPositionParent} = useGetPosition(elementChild1, elementChild1, elementChild2, elementChild3)

    const getPositionImage = () => {
        let X = itemImg.current.offsetWidth
        let Y = itemImg.current.offsetHeight
        let result = X / 2
        setImgCenter(result)
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            getPositionParent()
            getPositionImage()
        })
    }, [])


    useEffect(() => {
        if (getPositionParent) {
            let x = getPositionParent / 2
            setCenterParent(x)
        }
    }, [getPositionParent]);


    useEffect(() => {
        if(isVisible){
            setTimeout(()=>{
                setExample(true)

            },[2800])
        }else {
            setExample(false)

        }

    }, [isVisible])


    return <>
        <section className="section_our_services">
            <div className="G-container">
                <div className="section_our_services_content">
                    <div className="container">
                        <div className="our_services_title">
                            <h3>Our passion, your performance: tailor-made sales strategies that make the
                                difference!</h3>
                            <p>All three Ws shown in one graphic</p>

                        </div>

                        <div ref={lastElement}
                             className={activeElement === 'active' ? 'our_services_content active' : "our_services_content"}>
                            <div ref={itemParent} className="our_services_content_items">

                                <div ref={elementChild1} className="our_services_content_item ">
                                    <div className="content_item_text">
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
                                    </div>
                                    <div ref={itemImg} className="content_item_img_block G-justify-flex-end">
                                        <div className="content_item_img_block_content">
                                            <div className="content_item_img_bg"></div>
                                            <img src={servicesImg1} alt=""/>
                                        </div>
                                        {/*<div className='content_item_img_border'></div>*/}
                                    </div>

                                </div>
                                {/*=========================BORDER START========================*/}
                                <div className="animated_Left_border">
                                    <AnimatedLeftBorder active={isVisible} x={imgCenter}/>
                                </div>

                                <div className={isVisible ? "content_item1_center_border active" : 'content_item1_center_border'}>
                                      <AnimatedCenterBorder active={example}  width={51} right={imgCenter}/>
                                </div>

                                <div className="animated_right_border">
                                    <AnimatedRightBorder active={isVisible} x={imgCenter}/>
                                </div>
                                {/*=========================BORDER  END========================*/}

                                <div ref={elementChild2} className="our_services_content_item  ">
                                    <div className="content_item_img_block  G-justify-flex-start">
                                        <div className="content_item_img_block_content content_item_img_width ">
                                            <div className="content_item_img_bg "></div>
                                            <img src={servicesImg} alt=""/>
                                        </div>
                                    </div>

                                    <div className="content_item_text">
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
                                    </div>

                                </div>


                                {/*=========================BORDER  START========================*/}
                                <div className="animated_right_border">
                                    <AnimatedRightBorder active={isVisible} x={imgCenter}/>
                                </div>

                                <div className={isVisible ? "animated_center_border active" : 'animated_center_border'}></div>
                                <div className="animated_Left_border">
                                    <AnimatedLeftBorder active={isVisible} x={imgCenter}/>
                                </div>

                                {/*=========================BORDER  END========================*/}
                                <div ref={elementChild3} className="our_services_content_item">

                                    <div className="content_item_text">
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
                                    </div>

                                    <div className="content_item_img_block  G-justify-flex-start">
                                        <div className="content_item_img_block_content content_item_img_width ">
                                            <div className="content_item_img_bg "></div>
                                            <img src={servicesImg2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="animated_Left_border_end_point">
                                    <AnimatedLeftBorder active={isVisible} x={imgCenter} y={getPositionParent}/>
                                </div>
                                <div
                                    className={isVisible ? "animated_center_small_border active" : 'animated_center_small_border'}>
                                    {/*<AnimatedCenterBorder right={imgCenter} width={imgCenter} height={2}/>*/}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
        <div className={isVisible ? "services_middle_border active" : "services_middle_border"}>

        </div>
    </>
};

export default OurServices;