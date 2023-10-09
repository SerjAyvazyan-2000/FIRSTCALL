import React, {useEffect, useState} from 'react';
import "./style.scss"
import {useParams} from "react-router-dom";
import useInformation from "../../../hooks/useInformation";

const BlogItemDetails = () => {
    const params = useParams()
    const {blogList} = useInformation()
    const [blogItem, setBlogItem] = useState({})

    useEffect(() => {
        if(blogList.length){
            let result = blogList.filter(item => item.id === +params.id)
            if(result[0]){
                setBlogItem(result[0])
            }
        }
    }, [])


    return <section className="blog_item_details">
        <div className="G-container">
            <div className="blog_item_details_body">

                <div className="blog_details_header">
                    <h3 className="G-center">{blogItem.title ? blogItem.details.title : blogItem.title}</h3>
                      <div className="blog_details_subTitle">
                           <p>{blogItem.data}</p>
                          <p>{blogItem.name}</p>
                          <p>{blogItem.info}</p>

                      </div>
                </div>

                <div className="blog_details_content">

                     <div className="blog_details_content_text">
                          <div className="details_content_text_title">
                               <h3>{blogItem.title ? blogItem.details.title : blogItem.description }</h3>
                              <p>{blogItem.title ? blogItem.details.subText : blogItem.description }</p>
                          </div>
                     </div>
                    <div className="blog_details_content_image">
                        <img src={blogItem.img ? blogItem.details.img : blogItem.img } alt=""/>
                    </div>

                </div>

                <div className="blog_details_text_row2">
                    <h3>{blogItem.title ? blogItem.details.subTitle : blogItem.description }</h3>
                    <p>{blogItem.title ? blogItem.details.subText : blogItem.description }</p>
                </div>

                <div className="blog_details_text_row3">
                    <h3>{blogItem.title ? blogItem.details.subTitle : blogItem.description }</h3>
                    <p>{blogItem.title ? blogItem.details.subText : blogItem.description }</p>
                </div>


            </div>

        </div>

    </section>
};

export default BlogItemDetails;