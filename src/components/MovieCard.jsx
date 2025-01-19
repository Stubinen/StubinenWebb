import { useState, useEffect } from "react";
import MovieCardDetailed from "./MovieCardDetailed"
import MovieCardCSS from "./styles/MovieCard.module.css"

function MovieCard(props) {
    const [detailedView, setDetailedView] = useState(false);

    const openDetailedView = () => {
      setDetailedView(true);
    };

    const closeDetailedView = () => {
      setDetailedView(false);
    };

    // Effect to handle body overflow when forms are shown or hidden
    useEffect(() => {
      if (detailedView) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      // Cleanup function to reset overflow when the component is unmounted or the forms are closed
      return () => {
        document.body.style.overflow = 'auto';
      };
      }, [detailedView]);

    return (
      <>
      <div className={`${props.hasBeenShown ? 'movieCard shown' : 'movieCard'}`}>
        <img onClick={openDetailedView} src={props.imageSrc} alt={props.name} loading="lazy"/>
        {props.extraDetails && (
          <>
          <h2 id={MovieCardCSS.nameTitle}>{props.name}</h2>
          <h3 id={MovieCardCSS.dateTitle} style={{color: `${props.hasBeenShown ? 'red' : ''}`}}>{props.date}</h3>
          </>
        )};
      </div>

      {detailedView && (
        <MovieCardDetailed imageSrc={props.imageSrc} trailer={props.trailer} name={props.name} date={props.date} description={props.description} onClose={closeDetailedView}/>
      )}
      </>
    )
}
  
  export default MovieCard