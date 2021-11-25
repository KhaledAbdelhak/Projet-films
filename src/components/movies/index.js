import React, { Component } from 'react';
import Movie from './movie';

export default class Movies extends Component {
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />

            </div>
        )
    }
}