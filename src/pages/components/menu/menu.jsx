import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, BLOG_ROUTE, CAREER_ROUTE, REFERENCE_ROUTE, SERVICES_ROUTE} from "../../../routes/consts";
const Menu = () => {
    return <nav className="menu_block">
        <ul>
            <li>
                <NavLink to={SERVICES_ROUTE} >SERVICE</NavLink>
            </li>
            <li>
                <NavLink to={CAREER_ROUTE}>CAREER</NavLink>
            </li>
            <li>
                <NavLink to={REFERENCE_ROUTE}>References</NavLink>
            </li>
            <li>
                <NavLink to={BLOG_ROUTE} >Blog</NavLink>
            </li>
            <li>
                <NavLink to={ABOUT_ROUTE}>ABOUT US</NavLink>
            </li>

        </ul>
        </nav>
};

export default Menu;