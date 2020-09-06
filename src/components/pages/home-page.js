import React from 'react';

import HomeHeader from '../home-header';
import GameSetting from '../game-setting';

import './style.scss';

const HomePage = () => {
    return (
        <div className="wrapper">
            <HomeHeader/>
            <GameSetting/>
        </div>
    )
};

export default HomePage;