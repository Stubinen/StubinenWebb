import { useState } from "react";
import MovieCardDetailed from "./MovieCardDetailed"

function MovieCard(props) {
    const [detailedView, setDetailedView] = useState(false);

    const openDetailedView = () => {
      setDetailedView(true);
    };

    return (
      <>
      <div className={`${props.hasBeenShown ? 'movieCard shown' : 'movieCard'}`}>
        <img onClick={openDetailedView} src={props.imageSrc} alt={props.name} />
        <h2>{props.name}</h2>
        <h3 style={{color: `${props.hasBeenShown ? 'red' : ''}`}}>{props.date}</h3>
      </div>

      {detailedView && (
        <MovieCardDetailed />
)     }
      </>
    )
}
  
  export default MovieCard