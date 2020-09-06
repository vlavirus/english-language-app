import React from 'react';

import './default-box.scss';

const DefaultBox = ({id, number, currentQuestion, showQuestion}) => {

    return (
        <div className="default-box "
            onClick={() => {}}>
            <div className="box__number">
                {number}
            </div>
        </div>
    )
}


export default DefaultBox;