import MovieCardDetailedCSS from "./styles/MovieCardDetailed.module.css"

function MovieCardDetailed(props) {

    return (
      <div className={MovieCardDetailedCSS.movieCardDetailed} onClick={props.onClose}>
        <h1>{props.name}</h1>
        <div className={MovieCardDetailedCSS.container} style={{backgroundImage: "url(" + props.imageSrc + ")"}} onClick={(e) => e.stopPropagation()}>
          <div className={MovieCardDetailedCSS.content}>
            <p>{props.description}</p>
            <a target="_blank" href={props.trailer}>Spela Trailer</a>
          </div>
        </div>
      </div>
    )
}
  
  export default MovieCardDetailed