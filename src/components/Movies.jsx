import Movie from "./MovieCard.jsx"
import movies from "../data/moviesData.js"
import logo from "../img/Logostubinen.png"
import MoviesCSS from "./styles/Movies.module.css"

function Movies() {

    // Sort movies by soonest to latest date
    movies.sort((a, b) => a.date - b.date);

    // Map the movies to an array and if the movie has been shown, assign class "shown" in order to gray out
    const movieItems = movies.map((m, index) => {
        const shown = new Date() > m.date;
        const dateString = m.date.toISOString().split('T')[0]; // formats the date to yyyy-mm-dd

        return (
            <Movie key={index} imageSrc={m.image} name={m.name} date={dateString} description={m.description} hasBeenShown={shown} extraDetails={true}/>
        );
    });

    return (
    <div className={MoviesCSS.homepage}>
        
        <h1 id={MoviesCSS.title}>VISNINGAR DENNA TERMIN</h1>
        <img id={MoviesCSS.imgLogo} src={logo} alt="Stubinens logo" />
        <div className={MoviesCSS.movies}>
            {movieItems}
        </div>
    </div>
    )
  }
  
  export default Movies