import Header from "./Header.jsx"
import previousMovies from "../data/previouslyShownMovies.js"

function PreviousMovies() {

    // Sort movies by soonest to latest date
    previousMovies.sort((a, b) => b.date - a.date);

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

    const movieItems = previousMovies.map(m => {
      return (
          <img src={m.image} alt={m.name} />
      );
  });

    return (
      <div>
        <Header />
        <h1 id="titel-h1">Visningar de senaste 5 åren</h1>

        {movieChunks.map((chunk, index) => (
          <div key={index}>
            <h1 id="titel-h1">{chunk[15].date.getFullYear().toString().slice(2,4) + "/" + chunk[0].date.getFullYear().toString().slice(2,4)}</h1>
            <div className="previousMovies">
              {chunk.map((m, i) => (
                <img key={i} src={m.image} alt={m.name} />
              ))}
            </div>
          </div>
        ))}

      </div>
    )
  }
  
  export default PreviousMovies