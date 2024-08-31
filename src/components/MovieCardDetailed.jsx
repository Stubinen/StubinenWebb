import MovieCardDetailedCSS from "./styles/MovieCardDetailed.module.css"

function MovieCardDetailed(props) {

    return (
      <div className={MovieCardDetailedCSS.movieCardDetailed} onClick={props.onClose}>
        <img className="detailedImg" src={props.imageSrc} alt={props.name} />
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <a target="_blank" href="https://www.imdb.com/video/vi1743438361/">Spela Trailer</a>
        </div>
      </div>
    )
}
  
  export default MovieCardDetailed