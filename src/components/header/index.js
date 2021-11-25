import React, { Component } from 'react';
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
                    <ul class="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="favoris">Favoris</a>
                        </li>
                    </ul>
                </div>

            </header>
        )
    }
}