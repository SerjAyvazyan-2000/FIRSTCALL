import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import {ROLES_ITEM_DETAILS_ROUTES} from "../../../../routes/consts";

const RolesItem = ({item}) => {

    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return <div className="career_roles_item">
        <div className="roles_item_texts">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        <div className="roles_item_tolls">
            <div className="roles_item_icon">
                <img src={item.icon} alt=""/>

            </div>
            <div className="roles_item_route">
                <NavLink onClick={handleClick} to={`/${ROLES_ITEM_DETAILS_ROUTES}/${item.id}`}>{item.route}</NavLink>
            </div>
        </div>

    </div>
};

export default RolesItem;