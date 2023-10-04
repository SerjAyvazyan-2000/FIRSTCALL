import React from 'react';
import "./style.scss"
const AnimatedCenterBorder = ({left,right,active}) => {
    const style = {
        position: 'absolute',
        // marginTop: `${y}px`,
        // left: `${left}px`,
        right: `${right}px`,
        height: '2px',



    };

    return (
        <div className={ active ?  "center_border_element active" : "center_border_element"} style={style}></div>
    );
};

export default AnimatedCenterBorder;