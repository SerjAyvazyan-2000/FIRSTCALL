import React, {useState} from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, BLOG_ROUTE, CAREER_ROUTE, REFERENCE_ROUTE, SERVICES_ROUTE} from "../../../routes/consts";
import download from "../../../assets/svgIcons/DownloadSimple (3).svg";
import arrow from "../../../assets/svgIcons/ArrowDownRight (1).svg";

const Menu = ({openMenu, onClose}) => {
     const [openSub,setOpenSub] = useState(false)
    const handleClick  = () => {
        setOpenSub(!openSub)
    }
    const srollBottom = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return <>
        <div onClick={()=>onClose(false)} className={openMenu ? "header_menu_bg active" : "header_menu_bg"}></div>
        <nav className={openMenu ? "menu_block active" : "menu_block"}>
            <ul>
                <li>
                    <NavLink onClick={srollBottom} to={SERVICES_ROUTE}>SERVICE</NavLink>
                </li>
                <li>
                    <NavLink onClick={srollBottom} to={CAREER_ROUTE}>CAREER</NavLink>
                </li>
                <li>
                    <NavLink  onClick={srollBottom} to={REFERENCE_ROUTE}>References</NavLink>
                </li>
                <li>
                    <NavLink  onClick={srollBottom} to={BLOG_ROUTE}>Blog</NavLink>
                </li>
                <li>
                    <NavLink  onClick={srollBottom} to={ABOUT_ROUTE}>ABOUT US</NavLink>
                </li>
                <div className={"mobile_header_download "}>
                    <div className={openSub ? "mobile_header_language active" : "mobile_header_language "}>

                        <button onClick={handleClick}>LANGUAGES
                            <img src={arrow} alt=""/>
                        </button>
                        <div className="header_language_sub">
                            <NavLink className="header_language_en">EN</NavLink>
                            <NavLink className="header_language_de">DE</NavLink>
                        </div>


                    </div>
                    <div className="about_header_download_btn">
                        <button className='header_download_btn_white '>White paper
                            <img src={download} alt=""/>
                        </button>
                    </div>
                </div>

            </ul>
        </nav>
    </>
};

export default Menu;