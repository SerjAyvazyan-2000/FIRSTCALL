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
        <img src={arrow} alt=""/>
    </div>
}
export default ScrollTop