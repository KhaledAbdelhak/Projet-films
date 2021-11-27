import { Component } from "react";
import Header from "../header";
import Movies from "../movies";
import MovieDetails from "../movie-details"
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: 0
    }
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
          <Movies />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;
