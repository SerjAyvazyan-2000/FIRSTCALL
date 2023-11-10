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

    const srollBottom = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return <header className="header">
        <div className="G-container">
            <div className="header_content">
                <NavLink onClick={srollBottom} to={HOME_ROUTE} className="header_logo">
                    <img src={logo} alt=""/>
                </NavLink>
                <div className={"header_menu"}>
                    <Menu onClose={setOpenMenu} openMenu={openMenu}/>
                </div>

                <div className="header_download">
                    <div className="header_language">
                        <NavLink className="header_language_en">EN</NavLink>
                        <NavLink className="header_language_de">DE</NavLink>

                    </div>
                    <div className="header_download_btn">
                        <button className='header_download_btn_white '>White paper
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00024 0.3125C9.37994 0.3125 9.68774 0.620304 9.68774 1V9.40273L11.9516 7.13886C12.2201 6.87038 12.6554 6.87038 12.9239 7.13886C13.1924 7.40735 13.1924 7.84265 12.9239 8.11114L9.48638 11.5486C9.21789 11.8171 8.78259 11.8171 8.51411 11.5486L5.07661 8.11114C4.80812 7.84265 4.80812 7.40735 5.07661 7.13886C5.34509 6.87038 5.78039 6.87038 6.04888 7.13886L8.31274 9.40273V1C8.31274 0.620304 8.62055 0.3125 9.00024 0.3125ZM2.125 11.0625C2.125 10.6828 1.8172 10.375 1.4375 10.375C1.0578 10.375 0.75 10.6828 0.75 11.0625V15.875C0.75 16.2397 0.894866 16.5894 1.15273 16.8473C1.41059 17.1051 1.76033 17.25 2.125 17.25H15.875C16.2397 17.25 16.5894 17.1051 16.8473 16.8473C17.1051 16.5894 17.25 16.2397 17.25 15.875V11.0625C17.25 10.6828 16.9422 10.375 16.5625 10.375C16.1828 10.375 15.875 10.6828 15.875 11.0625V15.875H2.125V11.0625Z" fill="black"/>
                            </svg>

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