/* eslint-disable import/no-anonymous-default-export */
import  SearchBar from "./components/searchbar"
import  Movies from "./components/movies"
import  MovieDetails from "./components/movie-details"
import Loader from "../../components/Loader"

export default (props) => {

    console.log((props));
    return (
        <>
        <SearchBar updateMovies={props.updateMovies} />
        {props.loaded && 
            <div className="d-flex flex-row border flex-fill pt-4 p-2">
                <Movies  movies={props.movies}  updateSelectedMovie={props.updateSelectedMovie} />
                <MovieDetails  movie={props.movies[props.selectedMovie]}/>
            </div>
        }
        {!props.loaded && <Loader />}
        </>
    )
}