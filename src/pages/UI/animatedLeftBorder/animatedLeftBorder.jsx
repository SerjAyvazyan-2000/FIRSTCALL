import React from 'react';
import "./style.scss"
const AnimatedLeftBorder = ({ x,active }) => {
    const style = {
        position: 'absolute',
        // bottom: `${-y}px`,
        right: `${334}px`,
        // width: '2px',
        // background:"black",
        // zIndex:'-1',
        // top:0,
    };

    return (
        <div className={ active ? "left_border_element active" : 'left_border_element'} style={style}></div>
    );
};

export default AnimatedLeftBorder;