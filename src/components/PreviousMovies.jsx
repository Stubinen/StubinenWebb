import Header from "./Header.jsx"
import Movie from "./MovieCard.jsx"
import previousMovies from "../data/previouslyShownMovies.js"
import PreviousMoviesCSS from "./styles/PreviousMovies.module.css"
import { useTranslation } from "react-i18next"

function PreviousMovies() {
  
  const { t } = useTranslation();

    // Sort movies by soonest to latest date
    previousMovies.sort((a, b) => a.date - b.date);

    // Function to chunk the array into smaller arrays of a specified size
    const chunkArray = (array, chunkSize) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    };

  // Split the movies array into chunks of 8
  const movieChunks = chunkArray(previousMovies, 16);

  movieChunks.sort((a, b) => b[0].date - a[0].date) // Sort so that the most recent chunk of movies is at the top

    return (
      <div>
        <Header />
        <h1 id={PreviousMoviesCSS.titel}>{t('Past5years')}</h1>

        {movieChunks.map((chunk, index) => (
          <div key={index}>
            <h1 id={PreviousMoviesCSS.titel}>{chunk[0].date.getFullYear().toString().slice(2,4) + "/" + chunk[15].date.getFullYear().toString().slice(2,4)}</h1>
            <div className={PreviousMoviesCSS.previousMovies}>
              {chunk.map((m, i) => (
                <Movie key={i} imageSrc={m.image} name={m.name} date={""} description={m.description} hasBeenShown={false} extraDetails={false}/>
              ))}
            </div>
          </div>
        ))}

      </div>
    )
  }
  
  export default PreviousMovies