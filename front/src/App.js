import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: '캡틴마블',
            poster: 'http://image2.megabox.co.kr/mop/poster/2019/FF/35FB82-03E7-4407-95A2-49C9E59B7365.large.jpg'
          },
          {
            title: '부산행',
            poster: 'https://t1.daumcdn.net/movie/fe9da43b455db93228b5bfa74dacc78107f1eb40'
          },
          {
            title: '마녀',
            poster: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80789/80789_1000.jpg'
          },
          {
            title: '돈',
            poster: 'https://i.ytimg.com/vi/5cmbydhduHk/maxresdefault.jpg'
          }
        ]
      })
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index)=> {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }
}

export default App;
