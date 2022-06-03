import './Box.css';
import React from 'react'

const Box = ({ all, topLeft, topRight, bottomLeft, bottomRight, color }) => {
    let borderradius, backgroundColor;
    if (all !== 0) {
        borderradius = `${all || topLeft}px ${all || topRight}px ${all || bottomRight}px ${all || bottomLeft}px`
    }
    else if (topLeft !== 0) {
        borderradius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    }
    else if (topRight !== 0) {
        borderradius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    }
    else if (bottomLeft !== 0) {
        borderradius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    }
    else if (bottomRight !== 0) {
        borderradius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    }

    if (color) {
        backgroundColor = color;
    }
    else if (color === undefined) {
        backgroundColor = "#158CBA";
    }

    return (
        <div className="box">
            <div className="box__box" style={{ backgroundColor: backgroundColor, borderRadius: borderradius }}>
                <div style={{ borderRadius: borderradius }}>
                </div>
            </div>
        </div>
    )
}

export default Box