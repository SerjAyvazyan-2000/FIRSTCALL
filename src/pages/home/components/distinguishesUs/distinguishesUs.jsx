import React, {useEffect, useRef, useState} from 'react';
import "./style.scss"
import logo from "../../../../assets/svgIcons/Vector (4).svg"
import image from "../../../../assets/svgIcons/image.svg"
import image1 from "../../../../assets/svgIcons/image1.svg"
import image2 from "../../../../assets/svgIcons/image2.svg"
import image3 from "../../../../assets/svgIcons/image3.svg"
import image4 from "../../../../assets/svgIcons/image4.svg"
import image5 from "../../../../assets/svgIcons/image5.svg"
import useIntersection from "../../../hooks/useIntersection ";

const DistinguishesUs = ({lineSlider}) => {
    const lastElement = useRef(null);
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, lastElement)
    const [scrollLine, setScrollLine] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollLine(window.scrollY)
        })

    }, [])


    return <>
        <section ref={lastElement} className="distinguishes_us_section">
            <div className="G-container">
                <div className="distinguishes_body">

                    <div className="distinguishes_img_block">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 500 500">
                            <rect width="500" height="500" fill="none" stroke="black" strokeWidth="4" strokeDasharray="10 15"/>
                        </svg>

                        <div className="distinguishes_img_block_border">
                            <div className="distinguishes_red_block">
                                <div className="distinguishes_white_block">
                                    <img src={logo} alt=""/>
                                </div>
                            </div>


                            <div className="distinguishes_img row1">
                                <div className="img_block">
                                    <img src={image5} alt=""/>
                                </div>
                            </div>
                            <div className="distinguishes_img row2">
                                <div className="img_block">
                                    <img src={image2} alt=""/>
                                </div>
                            </div>
                            <div className="distinguishes_img row3">
                                <div className="img_block">
                                    <img src={image} alt=""/>
                                </div>
                            </div>
                            <div className="distinguishes_img row4">
                                <div className="img_block">
                                    <img src={image4} alt=""/>
                                </div>
                            </div>
                            <div className="distinguishes_img row5">
                                <div className="img_block">
                                    <img src={image3} alt=""/>
                                </div>
                            </div>
                            <div className="distinguishes_img row6">
                                <div className="img_block">
                                    <img src={image1} alt=""/>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="distinguishes_text_block">
                        <div className="distinguishes_text_title">
                            <h3>What distinguishes us</h3>
                        </div>

                        <div className="distinguishes_text_description">
                            <p>We redefine the call centre standard. As a sales agency, we emphasise thorough training
                                and
                                intensive education of our staff to ensure comprehensive and competent service. Our
                                specialisation lies in consultancy-intensive and IT-based solutions,
                                and our commitment to exclusivity ensures a competitive advantage for our clients</p>
                            <p>
                                Our claim? Simple: Lean. Efficient. Transparent. We strive to deliver the essential
                                aspects
                                of sales in a lean number of hours per week. Quality is not a by-product of our work,
                                but
                                the cornerstone.
                                We build intensive customer relationships and work hard to be able to take the first
                                place
                                in the offer at the right time. Our way of working is intensive in order to successfully
                                manage the long sales cycle in the IT industry of 6-12 months.
                            </p>
                            <p>
                                We integrate seamlessly with your existing systems, providing complete transparency and
                                ensuring a smooth handover to your sales force. We also provide weekly
                                reporting with detailed call notes and relevant market feedback to strengthen your
                                future
                                sales strategy.</p>
                        </div>

                        <div className="distinguishes_see_more">
                            <button>SEE MORE</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
        {lineSlider ?  <>

            <section className="animation_section G-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 768 568 568" fill="none">
                    <path style={{strokeDasharray: '177, 277', strokeDashoffset: scrollLine}} d="M1 0L0.99998 318L0.999957 974.5C0.999957 976.709 2.79082 978.5 4.99996 978.5L563 978.5C565.209 978.5 567 980.291 567 982.5L567 1119.5" stroke="#191923" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>

            </section>
        </> : null}

    </>
};

export default DistinguishesUs;