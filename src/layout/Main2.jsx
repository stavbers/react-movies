import React, { useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search2';
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovie = (str, type = 'all') => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
                str.length > 0 ? str : 'recent'
            }${type !== 'all' ? `&type=${type}` : ''}`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false)
                setMovies(data.Search);
            }

            );
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron+man`)
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Search searchMovie={searchMovie} />
            {loading ? <Preloader /> : <MovieList movies={movies} />}
        </main>
    );
}
export { Main };
