import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import { Route, Routes} from "react-router-dom"
import Homepage from "./Homepage.jsx"
import About from "./About.jsx"
import PreviousMovies from "./PreviousMovies.jsx"

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/previouslyShown" element={<PreviousMovies />}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
