import React from 'react';

import image from './waiting.gif';
import './_spiner.scss';


const Spiner = () => {
    return (
        <div className="spiner">
            <img src={image} alt="waiting-mage"/>
        </div>
    )
}

export default Spiner;