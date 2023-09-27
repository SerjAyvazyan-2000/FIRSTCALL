import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
const Menu = () => {
    return <nav className="menu_block">
        <ul>
            <li>
                <NavLink >SERVICE</NavLink>
            </li>
            <li>
                <NavLink>CAREER</NavLink>
            </li>
            <li>
                <NavLink >References</NavLink>
            </li>
            <li>
                <NavLink >Blog</NavLink>
            </li>
            <li>
                <NavLink >ABOUT US</NavLink>
            </li>

        </ul>
        </nav>
};

export default Menu;