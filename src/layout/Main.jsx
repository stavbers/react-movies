import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
    };
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron+man`)
            .then((resp) => resp.json())
            .then((data) => this.setState({ movies: data.Search }));
    }
    searchMovie = (str, type = 'all') => {
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
              type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) => this.setState({ movies: data.Search }));
    };
    render() {
        const { movies } = this.state;

        return (
            <main className='container content'>
                <Search searchMovie={this.searchMovie} />
                {movies.length ? <MovieList movies={movies} /> : <Preloader />}
            </main>
        );
    }
}
export { Main };
