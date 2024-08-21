

function MovieCard(props) {

    return (
      <div className="movieCard">
        <img src={props.imageSrc} alt={props.name} />
        <h2>{props.name}</h2>
        <h2>{props.date}</h2>
      </div>
    )
}
  
  export default MovieCard