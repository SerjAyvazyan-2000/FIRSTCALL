import React from 'react';
import "./style.scss"
import Menu from "../components/menu/menu";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/compainLogo4.png"

const Header = () => {
    return <header className="header">
        <div className="G-container">
            <div className="header_content">
                    <NavLink className="header_logo">
                        <span className="icon-Frame-5464-1"></span>
                    </NavLink>
                <div className="header_menu">
                    <Menu/>
                </div>

                <div className="header_download">
                    <div className="header_language">
                        <NavLink className="header_language_en">EN</NavLink>
                        <NavLink className="header_language_de">DE</NavLink>

                    </div>
                    <div className="header_download_btn">
                        <button className='header_download_btn_white white_button'>White paper
                           <span className='icon-download'></span>
                        </button>
                        <button className="header_download_btn_red red_button">L’ets start</button>
                    </div>
                </div>
            </div>


        </div>
    </header>
};

export default Header;