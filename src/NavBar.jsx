import { Link } from "react-router-dom"
import ReactCountryFlag from "react-country-flag"

function NavBar() {

    return (
      <div className="nav-bar">
        <Link to="/">HEM</Link>
        <Link to="/about">OM STUBINEN</Link>
        <Link to="previouslyShown">VISNINGAR ÖVER ÅREN</Link>
        <div>
          <button>LOGGA IN</button>
          <button>REGISTRERA</button>
        </div>
        <div>
          <ReactCountryFlag countryCode="GB" style={{width: '3em', height: '3em'}} svg />
          <ReactCountryFlag countryCode="SE" style={{width: '3em', height: '3em'}} svg />
        </div>
      </div>
    )
  }
  
  export default NavBar