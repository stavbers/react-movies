import {Movie} from '../components/Movie'

function MovieList(props) {
  const {movies} = props;
  return <div className="movieList">
    {movies.map(movie => {
      return <Movie key={movie.imdbID} {...movie} />
    })}
  </div>
}
export {MovieList}