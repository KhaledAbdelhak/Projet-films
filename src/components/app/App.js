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
      favoris: []
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
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch((err) => console.log(err))
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find( m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    })
  }

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex( f => f.title === title);
    favoris.splice(index, 1);
    this.setState({
      favoris
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
                addFavori={this.addFavori}
                removeFavori={this.removeFavori}
                favoris={this.state.favoris.map(f => f.title)}
            /> } 
           />
           <Route path="/favoris" element={ 
            <Favoris  
              favoris={this.state.favoris}
              removeFavori={this.removeFavori}
            /> } 
           />
           <Route path="*" element={ <Navigate replace to="/" /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
