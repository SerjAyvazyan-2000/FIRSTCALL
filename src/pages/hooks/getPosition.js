import {useEffect, useState} from "react";


const useGetPosition = (svgBorder, sectionElement) => {
    const [sectionInfo, setSectionInfo] = useState({
        sectionY: 0,
        scrollY: 0
    })

    const getSectionInfo = () => {
        window.addEventListener("scroll", () => {
            const sectionHeight = sectionElement.current.getBoundingClientRect().height;
            setSectionInfo((prevState) => (
                {...prevState, scrollY: window.scrollY, sectionY: sectionHeight}

            ))
            return sectionInfo
        })
        return sectionInfo

    }

    const getSvgLeftBorder = () => {
        let lineLength = svgBorder.current.getTotalLength()
        svgBorder.current.style.strokeDashoffset = lineLength + '' + lineLength
        window.addEventListener("scroll", () => {
            let scrollPercentage = (sectionInfo.sectionY) / (sectionInfo.scrollY)
            let drawLength = lineLength * scrollPercentage
            svgBorder.current.style.lineDashoffset = lineLength - drawLength


        })

    }



    return {getSectionInfo,getSvgLeftBorder}

}
export default useGetPosition