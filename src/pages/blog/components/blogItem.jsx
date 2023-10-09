import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";

const BlogItem = ({item}) => {
    return <div className="blog_item">
        <div className="blog_item_image">
            <img src={item.img} alt=""/>
        </div>
        <div className="blog_item_title">
            {item.title}
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
            <NavLink>{item.readMore}</NavLink>

        </div>

    </div>
};

export default BlogItem;