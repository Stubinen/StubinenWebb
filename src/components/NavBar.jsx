import { Link } from "react-router-dom"
import ReactCountryFlag from "react-country-flag"
import { useState, useEffect } from "react"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import NavBarCSS from "./styles/NavBar.module.css"
import hamburgerOpen from "../img/open.svg"
import hamburgerClose from "../img/close.svg"
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom';

function NavBar() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [navBarOpen, setNavBarOpen] = useState(true);

    const isMobile = useMediaQuery({ query: '(max-width: 1150px)' });

    const toggleClass = () => {
      setNavBarOpen(!navBarOpen);
    }

    const handleLoginClick = () => {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    };
  
    const handleRegisterClick = () => {
      setShowRegisterForm(true);
      setShowLoginForm(false);
    };
  
    const handleCloseForm = () => {
      setShowLoginForm(false);
      setShowRegisterForm(false);
    };

    useEffect(() => {
      if (!isMobile) {
        setNavBarOpen(true);
      }
    })
    // Effect to handle body overflow when forms are shown or hidden
    useEffect(() => {
    if (showLoginForm || showRegisterForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when the component is unmounted or the forms are closed
    return () => {
      document.body.style.overflow = 'auto';
    };
    }, [showLoginForm, showRegisterForm]);

    const { pathname } = useLocation();
  
    // Closes the navbar when being redirected
    useEffect(() => {
      toggleClass();
    }, [pathname]);

    return (
      <>
      <img onClick={toggleClass} id={NavBarCSS.openIcon} src={hamburgerOpen} alt="Hamburgermenu button" />
      <div className={navBarOpen ? NavBarCSS.navbar : "hide"}>
        <img onClick={toggleClass} id={NavBarCSS.closeIcon} src={hamburgerClose} alt="Hamburgermenu button" />

        <Link to="/">HEM</Link>
        <Link to="/about">OM STUBINEN</Link>
        <Link to="previouslyShown">VISNINGAR ÖVER ÅREN</Link>
        <button onClick={handleLoginClick}>LOGGA IN</button>
        <button onClick={handleRegisterClick}>REGISTRERA</button>

        {!isMobile && (
          <div className={NavBarCSS.navbarFlags}>
          <ReactCountryFlag countryCode="GB" style={{width: '3em', height: '3em'}} svg />
          <ReactCountryFlag countryCode="SE" style={{width: '3em', height: '3em'}} svg />
        </div>
        )}

        {showLoginForm && (
          <LoginForm onClose={handleCloseForm}/>
        )}

        {showRegisterForm && (
          <RegisterForm onClose={handleCloseForm}/>
        )}
      </div>

      {isMobile && (
          <div className={NavBarCSS.navbarFlags}>
          <ReactCountryFlag countryCode="GB" style={{width: '3em', height: '3em'}} svg />
          <ReactCountryFlag countryCode="SE" style={{width: '3em', height: '3em'}} svg />
        </div>
      )}
      </>
    )
  }
  
  export default NavBar