import React from 'react';
import hoverImg from './image/hoverImage.png'
import Style from './hoverImage.module.css'

const HoverImage = () => {
    return (
        <img
            style={{
                border: 'none',
                borderRadius: '60%',
                width: '30px',
                height: 'auto'
            }}
            className={Style.imageItem}
            src={hoverImg}
            alt='hoverImg'
        />
    );
};

export default HoverImage;