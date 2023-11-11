import React from 'react';
import "./style.scss"
import {Link, NavLink} from "react-router-dom";
import {BLOG_ITEM_DETAILS_ROUTES} from "../../../../routes/consts";

const BlogItem = ({item}) => {

    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return <div className="blog_item">
        <div className="blog_item_image">
            <img src={item.img} alt=""/>
        </div>
        <div className="blog_item_text_content">
            <div className="blog_item_title">
                <NavLink onClick={handleClick} to={`/${BLOG_ITEM_DETAILS_ROUTES}/${item.id}`}>  {item.title}</NavLink>
            </div>
            <div className="blog_item_utils">
                <div className="blog_item_data">
                    <p>{item.data}</p>

                </div>
                <div className="blog_item_name">
                    <p>{item.name}</p>

                </div>
                <div className="blog_item_info">
                    <p>{item.info}</p>
                </div>

            </div>
            <div className="blog_item_description">
                {item.description}
            </div>
            <div className="blog_item_route">
                <Link onClick={handleClick}   to={`/${BLOG_ITEM_DETAILS_ROUTES}/${item.id}`} >{item.readMore}</Link>
            </div>
        </div>


    </div>
};

export default BlogItem;