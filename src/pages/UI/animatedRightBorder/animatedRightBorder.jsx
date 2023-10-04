import React from 'react';
import "./style.scss"
const AnimatedRightBorder = ({ x,active }) => {
    const style = {
        position: 'absolute',
        // bottom: `${-y}px`,
        left: `${x}px`,
        // width: '2px',
        // background:"black",
        // zIndex:'-1',
        // top:0,


    };

    return (
        <div  className={ active ? "right_border_element active" : 'right_border_element'}   style={style}></div>
    );
};

export default AnimatedRightBorder;