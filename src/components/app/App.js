import { Component } from "react";
import Header from "../header";
import Movies from "../movies";
import MovieDetails from "../movie-details"
import Loader from "../Loader";
import dataMovies from "../../data"
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

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        loaded: true
      })
    }, 1000)
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('discover/movie')
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
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
