import {useState} from "react";

const useGetPosition = (itemParent, elementChild1, elementChild2, elementChild3,elementImg) => {
    const [marginParent, setMarginParent] = useState(0);
    const [imgCenter, setImgCenter] = useState(0);

    const getPositionParent = () => {
        const heightParent = itemParent.current.clientHeight
        const heightItem1 = elementChild1.current.clientHeight
        const heightItem2 = elementChild2.current.clientHeight
        const heightItem3 = elementChild3.current.clientHeight
        const itemsHeight = heightItem2 + heightItem1 + heightItem3
        const result = heightParent - itemsHeight
        setMarginParent(result / 3)
        return marginParent
    };

    const getPositionImage = () => {
        let X = elementImg.current.offsetWidth
        let Y = elementImg.current.offsetHeight
        let result = X / 2
        setImgCenter(result)
    }

    return {getPositionParent}

}
export default useGetPosition