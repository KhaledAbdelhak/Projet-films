import { Component } from "react";
import { Formik } from "formik";
import apiMovie, {apiMovieMap} from '../../conf/api.movie'

export default class SearchBar extends Component {
    handleSubmit = (values, actions) => {
        console.log(values);
        const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('')
        console.log(query);
        apiMovie.get('/search/movie' + query)
            .then((res) => res.data.results)
            .then( moviesApi => {
                const movies = moviesApi.map( apiMovieMap)
                this.props.updateMovies(movies)
                actions.setSubmitting(false)
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <Formik 
                onSubmit={this.handleSubmit}
                initialValues={{ query: '', language: 'en-US' }}
            >
                { ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                    <form className="d-flex flex_row p-2 m-2" onSubmit={handleSubmit}>
                        <input name="query" className="flex-fill form-control mx-2" placeholder="Search ..." onChange={handleChange} onBlur={handleBlur} />
                        <select  className="mx-2 form-control w-25" name="language" onChange={handleChange} onBlur={handleBlur}>
                            <option value="en-ES">Anglais</option>
                            <option value="fr-FR">Français</option>
                        </select>
                        <button className="btn btn-small btn-success" type="submit" disabled={isSubmitting} >Submit</button>
                    </form>
                )}

            </Formik>
            
        )
    }
}