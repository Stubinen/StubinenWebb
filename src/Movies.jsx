import Movie from "./MovieCard.jsx"

function Movies() {

    return (
    <>
        <h1 id="titel-h1">VISNINGAR DENNA TERMIN</h1>
        <div className="movies">
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
        </div>
    </>
    )
  }
  
  export default Movies