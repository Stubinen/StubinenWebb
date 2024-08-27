import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import { Route, Routes} from "react-router-dom"
import Homepage from "./components/Homepage.jsx"
import About from "./components/About.jsx"
import PreviousMovies from "./components/PreviousMovies.jsx"
import ScrollToTop from "./components/ScrollToTop.js"

function App() {
  return (
    <>
      <NavBar/>
      <ScrollToTop/>
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
