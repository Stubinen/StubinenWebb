import logo from "../img/Logostubinen.png"
import instagramLogo from "../img/icons8-instagram.svg"
import facebookLogo from "../img/icons8-facebook.svg"
import tiktokLogo from "../img/icons8-tiktok.svg"
import FooterCSS from "./styles/Footer.module.css"

function Footer() {

    return (
      <div className={FooterCSS.footer}>
        <img id={FooterCSS.imgLogoFooter} src={logo} alt="Stubinens logo" />
        <h3>info@stubinen.org</h3>
        <div id={FooterCSS.socialIcons}>
            <a href="https://www.instagram.com/stubinenfilmforening/"><img src={instagramLogo} alt="Instagram logo" /></a>
            <a href="#"><img src={tiktokLogo} alt="Tiktok logo" /></a>
            <a href="https://www.facebook.com/stubinen"><img src={facebookLogo} alt="Facebook logo" /></a>
        </div>
      </div>
    )
}
  
  export default Footer