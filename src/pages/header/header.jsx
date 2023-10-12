import React, {useState} from 'react';
import "./style.scss"
import Menu from "../components/menu/menu";
import {NavLink} from "react-router-dom";
import logo from "../../assets/svgIcons/Frame 5464 (2).svg"
import download from "../../assets/svgIcons/DownloadSimple (3).svg"
import {HOME_ROUTE} from "../../routes/consts";

const Header = () => {
    const [openMenu,setOpenMenu] = useState(false)

    const handleClick = ()=> {
        setOpenMenu(!openMenu)
    }
    return <header className="header">
        <div className="G-container">
            <div className="header_content">
                <NavLink to={HOME_ROUTE} className="header_logo">
                    <img src={logo} alt=""/>
                </NavLink>
                <div className={openMenu ? "header_menu active" : "header_menu"}>
                    <Menu openMenu={openMenu}/>
                </div>

                <div className="header_download">
                    <div className="header_language">
                        <NavLink className="header_language_en">EN</NavLink>
                        <NavLink className="header_language_de">DE</NavLink>

                    </div>
                    <div className="header_download_btn">
                        <button className='header_download_btn_white '>White paper
                            <img src={download} alt=""/>
                        </button>
                        <button className="header_download_btn_red ">L’ets start</button>
                    </div>
                </div>

                <div onClick={handleClick} className={openMenu ? "burger_menu active" : "burger_menu"}>
                     <span></span>
                </div>
            </div>
        </div>
    </header>
};

export default Header;