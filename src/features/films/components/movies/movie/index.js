import React, { Component } from 'react';
import './style.css';


export default class Movie extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
            <div onClick={this.mouseEnter} className="containerMovies">
                <img width="150" height="200" alt="film" src={this.props.movie.img} />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title} </h5>
                    <hr className="w-100" />
                    <p className="flex-fill">{this.props.movie.details} </p>
                    <div className="d-flex flex-row justify-content-end">
                        {this.props.isFavori && 
                            <button onClick={() => {this.props.removeFavori(this.props.movie.title)} } className="btn btn-small btn-danger">Remove</button>
                        }
                        {!this.props.isFavori && 
                            <button onClick={() => {this.props.addFavori(this.props.movie.title)} } className="btn btn-small btn-primary">Add</button>
                        }
                    </div>

                    </div>
            </div>
        )
    }
}