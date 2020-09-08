import React from 'react';

import './home-header.scss';

const HomeHeader = () => {

	function showHamburgerMenu() {
		const menu = document.querySelector('.items-container'),
		menuItem = document.querySelectorAll('.items-container__item'),
		hamburger = document.querySelector('.hamburger');
		hamburger.classList.toggle('hamburger_active');
	}

	return (
		<header className="header-home">
			<nav className="navigation">
				<div className="navigation-icons">
					<a href="#/" className="navigation-icons__icon"><span className="navigation-icons__icon-home"></span></a>
					<a href="#/" className="navigation-icons__icon">
						<span className="navigation-icons__icon-games"></span>
						<span className="navigation-icons__icon-text">Games</span>
					</a>
					<a href="#/" className="navigation-icons__icon">
						<span className="navigation-icons__icon-news"></span>
						<span className="navigation-icons__icon-text">News</span>
					</a>
				</div>
				<div className="navigation-functions">
					<a href="#/" className="navigation-functions__button">Contact us</a>
					<a href="#/" className="navigation-functions__button">Sign in</a>
					<a href="#/" className="navigation-functions__button">Make games</a>
				</div>
				<div className="hamburger"
					onClick={showHamburgerMenu}>
					<div className="hamburger__menu">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
			<h1 className="header-home__greeting">Nice to meet you!</h1>
		</header>
	)
};

export default HomeHeader;