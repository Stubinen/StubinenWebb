
function MovieCardDetailed(props) {

    return (
      <div className="movieCardDetailed" onClick={props.onClose}>
        <img src={props.imageSrc} alt={props.name} />

      </div>
    )
}
  
  export default MovieCardDetailed