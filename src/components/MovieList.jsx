import {Movie} from '../components/Movie'

function MovieList(props) {
  const {movies =[]} = props;
  return <div className="movieList">
    {movies.length ? movies.map(movie => (
       <Movie key={movie.imdbID} {...movie} />
      )) : <h4>Nothing found</h4>
      }
  </div>
}
export {MovieList}