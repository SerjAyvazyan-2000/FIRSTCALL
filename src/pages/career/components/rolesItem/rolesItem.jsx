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
            <NavLink onClick={handleClick} to={`/${ROLES_ITEM_DETAILS_ROUTES}/${item.id}`}>{item.title}</NavLink>
            <p>{item.description}</p>
        </div>
        <div className="roles_item_tolls">
            <div className="roles_item_icon">
                {/*<img src={item.icon} alt=""/>*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                    <g clip-path="url(#clip0_955_2893)">
                        <path d="M16.25 48.75L48.75 16.25" stroke="#191923" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M48.75 42.6562V16.25H22.3438" stroke="#191923" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_955_2893">
                            <rect y="65" width="65" height="65" rx="2" transform="rotate(-90 0 65)" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="roles_item_route">
                <NavLink onClick={handleClick} to={`/${ROLES_ITEM_DETAILS_ROUTES}/${item.id}`}>{item.route}</NavLink>
            </div>
            <div className="roles_item_icon_mobile">
                <img src={item.icon} alt=""/>
            </div>

        </div>

    </div>
};

export default RolesItem;