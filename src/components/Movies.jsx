import Movie from "./MovieCard.jsx"
import movies from "../data/moviesData.js"
import logo from "../img/Logostubinen.png"
import MoviesCSS from "./styles/Movies.module.css"
import { useTranslation } from "react-i18next";
import logotext from "../assets/Stubinen_logo_text.png"

function Movies() {

    const { t } = useTranslation();

    // Sort movies by soonest to latest date
    movies.sort((a, b) => a.date - b.date);
    let movieItems;

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
            trailer: m.trailer,
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
            trailer={m.trailer}
            name={m.name}
            date={m.date}
            description={m.description}
            hasBeenShown={m.hasBeenShown}
            extraDetails={m.extraDetails}
        />
    ));

    return (
    <div className={MoviesCSS.homepage}>
        <img id={MoviesCSS.imgLogo} src={logotext} alt="Stubinens logo" />

        <h1 id={MoviesCSS.title}>{t('Viewings')}</h1>
        <div className={MoviesCSS.movies}>
            {movieItems}
        </div>
    </div>
    )
  }
  
  export default Movies