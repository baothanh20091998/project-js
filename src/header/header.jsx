import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "./header.scss"

export default class Header extends Component {
    render() {
        return (
            <ul className="header">
                <h5>Menu</h5>
                <li>
                    <NavLink activeClassName="active__menu" to="/xuc-xac">Game Xúc Xắc</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active__menu" to="/shopping">Shopping Cart</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active__menu" to="/showroom-car">Show Room Car</NavLink>
                </li>
            </ul>
        )
    }
}
