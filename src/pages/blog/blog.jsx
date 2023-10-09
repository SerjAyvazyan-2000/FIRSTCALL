import React, {useRef} from 'react';
import AnimationHeader from "../components/animationHeader/animationHeader";
import animationPng from "../../assets/images/2.png"
import animationSvg from "../../assets/svgIcons/1 (5).svg"
import useIntersection from "../hooks/useIntersection ";
import useInformation from "../hooks/useInformation";
import BlogItem from "./components/blogItem";
import "./style.scss"

const Blog = () => {
    const blogHeader = useRef()
    const observer = useRef(null);
    const {isVisible} = useIntersection(observer, blogHeader)

    const {blogList,blogSequence} = useInformation()

    return <section className="blog_section" ref={blogHeader}>
        <AnimationHeader
            title={'BLOG'}
            description='We offer more than the usual call centre routine. Our rbroad portfolio ranges from  B2B cold calling.'
            image={animationPng}
        />


        <div className="blog_list_container">
            <div className="G-container">
                <div className="blog_list">
                    {blogList.map(item => (
                        <BlogItem key={item.id} item={item}/>
                    ))}
                </div>
                <div className="blog_list_sequence">
                    <div className='sequence_numbers'>
                        {blogSequence.map(item=>(
                             <div className='sequence_number'>{item.number}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Blog;