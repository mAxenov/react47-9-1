import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu">
            <NavLink className="menu__item" to="/">Главная</NavLink>
            <NavLink className="menu__item" to="/drift">Дрифт-такси</NavLink>
            <NavLink className="menu__item" to="/timeattack">Time Attack</NavLink>
            <NavLink className="menu__item" to="/forza">Forza Karting</NavLink>
        </nav>
    );
}

export default Menu;