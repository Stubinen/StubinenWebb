import Movie from "./MovieCard.jsx"

function Movies() {

    return (
    <>
        <h1 id="visningar-h1">VISNINGAR DENNA TERMIN</h1>
        <div className="visningar">
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