
import { useState, useEffect } from "react";

const useIntersection = (observer,lastElement) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        let callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                console.log("show div")
                setIsVisible(true)
            }else {
                setIsVisible(false)

            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)

    }, []);

    return {isVisible}

}

export default useIntersection;