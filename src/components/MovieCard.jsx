
function MovieCard(props) {

    return (
      <div className={`${props.hasBeenShown ? 'movieCard shown' : 'movieCard'}`}>
        <img src={props.imageSrc} alt={props.name} />
        <h2>{props.name}</h2>
        <h3 style={{color: `${props.hasBeenShown ? 'red' : ''}`}}>{props.date}</h3>
      </div>
    )
}
  
  export default MovieCard