// @flow
import React from 'react';
import './Movie.css'

type props = {
  title: string,
  poster: string
}

class Movie extends React.Component {
  
  render() {
    return (
        <div>
            <h2>{this.props.title}</h2>
            {MoviePoster(this.props.poster)}
        </div>
    );
  }
}


var MoviePoster = (poster) => {
  return (
    <div>
        <img src={poster}></img>
    </div>
  );
}

export default Movie;