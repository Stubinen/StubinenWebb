//import logo from "https://ik.imagekit.io/stubinen/Logostubinen.png"
import instagramLogo from "../img/icons8-instagram.svg"
import facebookLogo from "../img/icons8-facebook.svg"
import tiktokLogo from "../img/icons8-tiktok.svg"
import letterboxdLogo from "../img/letterboxd.png"
import FooterCSS from "./styles/Footer.module.css"

function Footer() {

    return (
      <div className={FooterCSS.footer}>
        <img id={FooterCSS.imgLogoFooter} src="https://ik.imagekit.io/stubinen/Logostubinen.png" alt="Stubinens logo" />
        <div id={FooterCSS.center}>
          <h3>info@stubinen.org</h3>
          <div id={FooterCSS.socialIcons}>
              <a target="_blank" href="https://www.instagram.com/stubinenfilmforening/"><img src={instagramLogo} alt="Instagram logo" /></a>
              <a target="_blank" href="https://www.tiktok.com/@stubinenfilmforening"><img src={tiktokLogo} alt="Tiktok logo" /></a>
              <a target="_blank" href="https://www.facebook.com/stubinen"><img src={facebookLogo} alt="Facebook logo" /></a>
              <a target="_blank" href="https://letterboxd.com/stubinen/"><img src={letterboxdLogo} alt="Letterboxd logo" /></a>
          </div>
          <div id={FooterCSS.iconText}>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>
        </div>
        <div id={FooterCSS.right}></div>
      </div>
    )
}
  
  export default Footer