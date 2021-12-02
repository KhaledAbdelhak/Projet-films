import React, { Component } from 'react';
import './style.css';


export default class Favori extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.favoris.title)
    }

    render() {
        return (
            <div className="containerFavoris">
                <img width="150" height="250" alt="film" src={this.props.favoris.img} />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.favoris.title} </h5>
                    <hr className="w-100" />
                    <p className="flex-fill">{this.props.favoris.details} </p>
                    <div className="d-flex flex-row justify-content-end">
                        <button onClick={() => {this.props.removeFavori(this.props.favoris.title)} } className="btn btn-small btn-danger">Remove</button>
                    </div>

                    </div>
            </div>
        )
    }
}