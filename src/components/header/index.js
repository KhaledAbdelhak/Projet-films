import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import './styles.css';

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <a className="navbar-brand me-auto" href="/">AllOMovies</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/favoris" className="nav-link" >Favoris</NavLink>

                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}