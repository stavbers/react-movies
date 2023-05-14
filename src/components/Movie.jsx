function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Poster: poster,
    Type: type,
  } = props;
  
  return ( 
  <div id={id} className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
          <img loading="lazy" src={poster} alt='img' />

        </div>
        <div className="card-content">
        <span className="card-title">{title}</span>
          <p>{year}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  </div>
  

  )
}
export {Movie}