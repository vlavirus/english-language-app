import React from 'react';
import CardItemContainer from '../card-item';
import CardTableContainer from '../card-table';
import CardHeader from '../card-header';
import Congrats from '../congrats';

import './style.scss';

const GamePage = () => {
    return (
        <div className="wrapper">
            <CardHeader/>
            <CardTableContainer/>
            <CardItemContainer/>
            <Congrats/>
        </div>
    )
};

export default GamePage;