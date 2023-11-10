import "./style.scss"
import {useState} from "react";
import arrow from "../../../assets/svgIcons/ArrowDownRight (1).svg";


const ScrollTop = () => {

    const [scroll,setScroll] = useState(false)

    window.onscroll = () => {
        if(window.scrollY > 300){
            setScroll(true)
        }else {
            setScroll(false)
        }
    }
    const scrollClick = () => {
        window.scrollTo(0,0)
    }
    return <div onClick={scrollClick} className={`scroll_top izShowBtn  ${!scroll ? "izShowBtn_hide" : null}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
            <g clip-path="url(#clip0_1195_16011)">
                <path d="M22.3498 11.8926V33.8933" stroke="#191923" stroke-width="1.81522" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4118 24.9544L22.3496 33.8922L31.2874 24.9544" stroke="#191923" stroke-width="1.81522" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1195_16011">
                    <rect x="22.3496" y="0.892578" width="31.1137" height="31.1137" rx="4" transform="rotate(45 22.3496 0.892578)" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
}
export default ScrollTop