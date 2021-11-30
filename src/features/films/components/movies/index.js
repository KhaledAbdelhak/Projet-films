import React, { Component } from 'react';
import Movie from './movie';

export default class Movies extends Component {
    
    render() {
        console.log(this.props.movies);
        return (
            <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
                {
                    this.props.movies.map((movie, index) => (
                        <Movie key={movie.title + index} movie={movie} updateSelectedMovie={ () => { this.props.updateSelectedMovie(index)} } />

                    ))
                }             
            </div>
        )
    }
}