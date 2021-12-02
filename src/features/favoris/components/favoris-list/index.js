import React, { Component } from 'react';
import Favori from './favori-element';

export default class Favoris extends Component {
    
    render() {
        return (
            <div className="w-100 d-flex flex-row flex-wrap mx-auto">
                {
                    this.props.favoris.map((movie, index) => (
                        <Favori  key={movie.title + index} 
                                favoris={movie} 
                                updateSelectedMovie={ () => { this.props.updateSelectedMovie(index)} } 
                                removeFavori={this.props.removeFavori}
                        />
                    ))
                }             
            </div>
        )
    }
}