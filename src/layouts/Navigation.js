import React, { Component } from 'react';

import '../styles/Navigation.css';

import { NavLink } from 'react-router-dom';

const menuList = [
    { name: "Home", path: "/", exact: true },
    { name: "Bands", path: "/bands" },
    { name: "YT channels", path: "/channels" },
]

class Navigation extends Component {

    state = {
        btnActive: false,
    }

    handleButtonClick = (e) => {
        console.log('elo');
        this.setState({
            btnActive: !this.state.btnActive,
        });
    }


    render() {

        const activeStyle = this.state.btnActive ? "active" : null;

        const menuItem = menuList.map((item, index) => (
            <li key={index} className="nav__item">
                <NavLink className="nav__link" exact={item.exact ? item.exact : false} to={item.path}>{item.name}</NavLink>
            </li>
        ))

        return (
            <>
                <button onClick={this.handleButtonClick} className="main-navbar__hamburger">
                    <span className={[activeStyle, "hamburger__item hamburger__item--first"].join(' ')}></span>
                    <span className={[activeStyle, "hamburger__item hamburger__item--second"].join(' ')}></span>
                    <span className={[activeStyle, "hamburger__item hamburger__item--third"].join(' ')}></span>
                </button>
                <nav className={[activeStyle, "main-navbar__nav"].join(' ')}>
                    <ul className={[activeStyle, "nav__list"].join(' ')}>
                        {menuItem}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navigation;