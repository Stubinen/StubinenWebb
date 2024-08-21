import Movie from "./MovieCard.jsx"

function Movies() {

    return (
    <>
        <h1 id="titel-h1">VISNINGAR DENNA TERMIN</h1>
        <div className="movies">
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/bullettrain.png" name="Bullet Train" date="2024-09-01"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/little_women.png" name="Little Women" date="2024-09-15"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/the_handmaiden.png" name="The Handmaiden" date="2024-10-06"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/snatch.png" name="Snatch" date="2024-10-20"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/akira.png" name="Akira" date="2024-11-03"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersVT24/MV.png" name="Medlemmarnas Val!" date="2024-11-17"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/her.png" name="Her" date="2024-11-24"/>
            <Movie imageSrc="https://api.stubinen.org/img/postersHT24/the_dictator.png" name="The Dictator" date="2024-12-08"/>
        </div>
    </>
    )
  }
  
  export default Movies