import React, {useEffect, useState} from 'react';
import "./style.scss"
import {useParams} from "react-router-dom";
import useInformation from "../../../hooks/useInformation";
import BlogItem from "../blogItem/blogItem";
import facebook from "../../../../assets/svgIcons/FacebookLogo (1).svg"
import twitter from "../../../../assets/svgIcons/TwitterLogo (1).svg"
import telegram from "../../../../assets/svgIcons/TelegramLogo (1).svg"

const BlogItemDetails = () => {
    const params = useParams()
    const {blogList} = useInformation()
    const [blogItem, setBlogItem] = useState({})
    const [similarList, setSimilarList] = useState([])

    useEffect(() => {

        if (blogList.length) {
            let result = blogList.filter(item => item.id === +params.id)
            if (result[0]) {
                console.log('dsfsdfsdfs')
                setBlogItem(result[0])
            }
        }
    }, [params.id])
    useEffect(() => {
        if (blogList.length) {
            let result = blogList.filter(element => element.id <= 3)
            setSimilarList(result)
        }
    }, [])


    return  <>
    {    Object.keys(blogItem).length   ?
        <>
            <section id="blogDetails" className="blog_item_details">
                <div className="G-container">
                    <div className="blog_item_details_body">
                        <div className="blog_details_header">
                            <h3 className="G-center">{blogItem.details.title}</h3>
                            <div className="blog_details_subTitle">
                                <p>{blogItem.data}</p>
                                <p>{blogItem.name}</p>
                                <p>{blogItem.info}</p>

                            </div>
                        </div>

                        <div className="blog_details_content">

                            <div className="blog_details_content_text">
                                <div className="details_content_text_title">
                                    <h3>{blogItem.title }</h3>
                                    <p>{ blogItem.details.subText}</p>
                                </div>
                            </div>
                            <div className="blog_details_content_image">
                                <img src={ blogItem.details.img } alt=""/>
                            </div>

                        </div>

                        <div className="blog_details_text_row2">
                            <h3>{ blogItem.details.subTitle }</h3>
                            <p>{ blogItem.details.subText }</p>
                        </div>

                        <div className="blog_details_text_row3">
                            <h3>{ blogItem.details.subTitle }</h3>
                            <p>{ blogItem.details.subText}</p>
                        </div>

                        <div className="share_blog">
                            <a href='' className="share_blog_text">Share a blog</a>
                            <div className="share_blog_icons">
                                <a href="">
                                    <img src={facebook} alt=""/>
                                </a>
                                <a href="">
                                    <img src={telegram} alt=""/>
                                </a>
                                <a href="">
                                    <img src={twitter} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="similar_blog">
                            <h3 className="similar_blog_title">SImilar blog</h3>
                            <div className="similar_blog_list">
                                {setSimilarList.length ? similarList.map(item => (
                                    <BlogItem key={item.id} item={item}/>
                                )) : null}
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>

        : null}

        </>

};

export default BlogItemDetails;