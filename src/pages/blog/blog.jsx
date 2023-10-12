import React, {useRef} from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationPng from "../../assets/images/2.png"
import animationSvg from "../../assets/svgIcons/1 (5).svg"
import useIntersection from "../hooks/useIntersection ";
import useInformation from "../hooks/useInformation";
import BlogItem from "./components/blogItem/blogItem";
import "./style.scss"

const Blog = () => {


    const {blogList, blogSequence} = useInformation()

    return <>
        <AnimationHeader
                title={'BLOG'}
                description='We offer more than the usual call centre routine. Our rbroad portfolio ranges from  B2B cold calling.'
                image={animationPng}
            />
        <section className="blog_section">
            <div className="blog_list_container">
                <div className="G-container">
                    <div className="blog_list">
                        {blogList.map(item => (
                            <BlogItem key={item.id} item={item}/>
                        ))}
                    </div>
                    <div className="blog_list_sequence">

                        <div className='sequence_numbers'>
                            <span className="icon-Vector-3 sequence_arrow_right"></span>
                            {blogSequence.map(item => (
                                <div className='sequence_number'><span>{item.number}</span></div>
                            ))}
                            <span className="icon-Vector-1 sequence_arrow_left"></span>
                        </div>
                    </div>
                    <div className="blog_list_sequence_mobil_btn ">
                         <button className='red_button'>Load More</button>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default Blog;