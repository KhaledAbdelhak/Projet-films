import axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRiOWQ5NjIxNzA5YWFiMzJhOWNlYmRmYmQ2NjRkYSIsInN1YiI6IjYxYTUxY2Y5MDIzMWYyMDA4ZDc1ZDIyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMA5YxpFnJcYUx0-yC3IBJTdH0809KvtJD9DtlcMzA'
    return req;
})

export default apiMovie;


export const apiMovieMap = ( m => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview,
}))