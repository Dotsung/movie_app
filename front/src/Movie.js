// @flow
import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = ({title, poster, genres, synopsis}) => {
  return (
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={poster}/>
        </div>
        <div className="Movie__Columns">
          <h1>{title}</h1>
          <div className="Movie__Genres">
            {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
          </div>
          <p className="Movie__Synopsis">
            {synopsis}
          </p>
        </div>
      </div>
  );
}

const MoviePoster = ({poster}) => {
  return (
    <div>
        <img src={poster}></img>
    </div>
  );
}

const MovieGenre = ({genre}) => {
  return (
    <span className="Movie_Genre">{genre}</span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genres: PropTypes.array.isRequired
}

export default Movie;