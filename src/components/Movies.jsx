import Movie from "./MovieCard.jsx"
import movies from "../data/moviesData.js"

function Movies() {

    // Sort movies by soonest to latest date
    movies.sort((a, b) => a.date - b.date);

    // Map the movies to an array and if the movie has been shown, assign class "shown" in order to gray out
    const movieItems = movies.map(m => {
        const shown = new Date() > m.date;
        const dateString = m.date.toISOString().split('T')[0]; // formats the date to yyyy-mm-dd

        return (
            <Movie key={m.id} imageSrc={m.image} name={m.name} date={dateString} hasBeenShown={shown}/>
        );
    });

    return (
    <>
        <h1 id="titel-h1">VISNINGAR DENNA TERMIN</h1>
        <div className="movies">
            {movieItems}
        </div>
    </>
    )
  }
  
  export default Movies