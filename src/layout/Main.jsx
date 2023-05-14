import React from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron+man`)
            .then((resp) => resp.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    }
    searchMovie = (str, type = 'all') => {
      this.setState({loading: true})
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${
              str.length> 0 ? str : 'recent'}${type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((resp) => resp.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    };
    render() {
        const { movies, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchMovie={this.searchMovie} />
                {loading ? <Preloader />  : <MovieList movies={movies}/>}
            </main>
        );
    }
}
export { Main };
