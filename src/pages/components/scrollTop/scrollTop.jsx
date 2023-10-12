import "./style.scss"
import {useState} from "react";


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
    return <div onClick={scrollClick} className={`scroll-top izShowBtn  ${!scroll ? "izShowBtn_hide" : null}`}>
        <i className="icon-arrow-up"></i>
    </div>
}
export default ScrollTop