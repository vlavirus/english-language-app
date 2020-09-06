import React from 'react';

import './home-header.scss';

const HomeHeader = () => {
    return (
        <header className="header-home">
            <nav className="navigation">
                <div className="navigation-icons">
                    <a href="#/" className="navigation-icons__icon"><span className="navigation-icons__icon-home"></span></a>
                    <a href="#/" className="navigation-icons__icon">Games</a>
                    <a href="#/" className="navigation-icons__icon">News</a>
                </div>
                <div className="navigation-functions">
                    <a href="#/" className="navigation-functions__button">Contact us</a>
                    <a href="#/" className="navigation-functions__button">Sign in</a>
                    <a href="#/" className="navigation-functions__button">Make games</a>
                </div>
            </nav>
            <h1 className="header-home__greeting">Nice to meet you!</h1>
        </header>
    )
};

export default HomeHeader;