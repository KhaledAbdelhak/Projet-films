import { Component } from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import Header from "../header";
import Films from "../../features/films";
import Favoris from "../../features/favoris";
import apiMovie, { apiMovieMap } from "../../conf/api.movie";
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
        const movies = moviesApi.map(apiMovieMap)
        this.updateMovies(movies)
      })
      .catch((err) => console.log(err))
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Routes>
          <Route path="/" element={
            <Films 
                loaded={this.state.loaded}
                updateMovies={this.updateMovies}
                updateSelectedMovie={this.updateSelectedMovie}
                movies={this.state.movies}
                selectedMovie={this.state.selectedMovie}
            /> } 
           />
           <Route path="/favoris" element={ <Favoris/> } />
           <Route path="*" element={ <Navigate replace to="/" /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
