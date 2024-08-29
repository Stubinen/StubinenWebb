import Header from "./Header.jsx"
import ProfileCard from "./ProfileCard.jsx"
import mclovin from "../img/mcLovin.jpg"
import AboutCSS from "./styles/About.module.css"

function About() {

    return (
      <div className={AboutCSS.about}>
        <Header />
        <div className={AboutCSS.aboutInfoSection}>
          <h1>Om Stubinen</h1>
          <p>Stubinen är en filmförening för studenter av stundenter. Vi visar 8 varierade filmer från olika genrer per termin på biografen CNEMA på andra sidan strömmen från campus Norrköping. Ett medlemskap kostar 70 kr per termin och låter dig se bra film till billigt pris. Även om du inte studerar på Linköpings universitet kan du bli medlem och ta del av allt Stubinen har att erbjuda!</p>
        </div>
        <h1>Styrelsen 24/25</h1>
        <div className={AboutCSS.profiles}>
          <ProfileCard name="Samuel" role="Ordförarmästare / Kapten" imageSrc={mclovin}/>
          <ProfileCard name="Yehya" role="Snubben man swishar" imageSrc={mclovin}/>
          <ProfileCard name="Chloe" role="Eventgrejsansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Ada" role="Filmansvarig & Inköpsansvarig (Shoppaholic)" imageSrc={mclovin}/>
          <ProfileCard name="Axel" role="Posterskaparmagiker" imageSrc={mclovin}/>
          <ProfileCard name="Natalie" role="Tiktok och memeansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Ludwig" role="Webbmästare, webbchef, unofficial sekreterare, film-mästare, lvl 100 crook, the list goes on..." imageSrc={mclovin}/>
        </div>
      </div>
    )
  }
  
  export default About