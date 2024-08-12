import { Link } from "react-router-dom"

function NavBar() {

    return (
      <div className="nav-bar">
        <Link to="/">HEM</Link>
        <Link to="/about">OM STUBINEN</Link>
        <Link to="previouslyShown">VISNINGAR ÖVER ÅREN</Link>
        <button>LOGGA IN</button>
        <button>REGISTRERA</button>
      </div>
    )
  }
  
  export default NavBar