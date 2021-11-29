import { Component } from "react";
import Header from "../header";
import Movies from "../movies";
import MovieDetails from "../movie-details"
import Loader from "../Loader";
import apiMovie from "../../conf/api.movie";
import './style.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null, 
      selectedMovie: 0,
      loaded: false,
    }

  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('discover/movie')
      .then((res) => res.data.results)
      .then( moviesApi => {
        const movies = moviesApi.map( m => ({
          img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
          title: m.title,
          details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
          description: m.overview,
        }))
        this.updateMovies(movies)
      })
      .catch((err) => console.log(err))
  }

  updateMovies(movies) {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded && 
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
          <Movies  movies={this.state.movies}  updateSelectedMovie={this.updateSelectedMovie} />
          <MovieDetails  movie={this.state.movies[this.state.selectedMovie]}/>
        </div>
        }
        {!this.state.loaded && <Loader />}
      </div>
    );
  }
}

export default App;
