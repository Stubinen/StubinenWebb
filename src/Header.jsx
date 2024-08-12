import logo from "./img/Logostubinen.png"

function Header() {

    return (
      <div className="header">
        <img id="imgLogo" src={logo} alt="Stubinens logo" />
      </div>
    )
}
  
  export default Header