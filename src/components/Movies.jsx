import Movie from "./MovieCard.jsx"
import movies from "../data/moviesData.js"
import logo from "../img/Logostubinen.png"
import MoviesCSS from "./styles/Movies.module.css"
import { useMediaQuery } from 'react-responsive'

function Movies() {

    const isMobile = useMediaQuery({ query: '(max-width: 750px)' })

    // Sort movies by soonest to latest date
    movies.sort((a, b) => a.date - b.date);
    let movieItems;

    if (!isMobile) {
        // Map the movies to an array and if the movie has been shown, assign class "shown" in order to gray out
        movieItems = movies.map((m, index) => {
            let shown = new Date() > m.date;

            const currentDateString = new Date().toISOString().split('T')[0];
            const dateString = m.date.toISOString().split('T')[0]; // formats the date to yyyy-mm-dd

            // Check if the movie is to be shown today, if so, mark it as not shown
            if (currentDateString == dateString){
                shown = false;
            }

            return (
                <Movie key={index} imageSrc={m.image} name={m.name} date={dateString} description={m.description} hasBeenShown={shown} extraDetails={true}/>
            );
        });
    }
    else {
        const moviesWithShown = movies.map((m, index) => {
            let shown = new Date() > m.date;
        
            const currentDateString = new Date().toISOString().split('T')[0];
            const dateString = m.date.toISOString().split('T')[0]; // formats the date to yyyy-mm-dd
        
            // Check if the movie is to be shown today, if so, mark it as not shown
            if (currentDateString === dateString) {
                shown = false;
            }
        
            return {
                index: index,
                imageSrc: m.image,
                name: m.name,
                date: dateString,
                description: m.description,
                hasBeenShown: shown,
                extraDetails: true
            };
        });

        moviesWithShown.sort((a, b) => a.hasBeenShown - b.hasBeenShown);

        movieItems = moviesWithShown.map((m) => (
            <Movie
                key={m.index}
                imageSrc={m.imageSrc}
                name={m.name}
                date={m.date}
                description={m.description}
                hasBeenShown={m.hasBeenShown}
                extraDetails={m.extraDetails}
            />
        ));
    }

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