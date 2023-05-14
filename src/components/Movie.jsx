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
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img loading="lazy" src={poster} alt='img'/>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{year}</p>
        </div>
        <div className="card-action">
          <a href="!#">{type}</a>
        </div>
      </div>
    </div>
  </div>
  )
}
export {Movie}