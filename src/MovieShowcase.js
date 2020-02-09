import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(x => {return <MovieCard />});
    //title: 'Choux and Maru go to Istanbul',
    IMDBRating: 3,
    genres: ['cats', 'adventure', 'romance'],
    poster
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
