import Header from "./Header.jsx"
import ProfileCard from "./ProfileCard.jsx"
import mclovin from "../img/mcLovin.jpg"
import AboutCSS from "./styles/About.module.css"

function About() {

    return (
      <div className={AboutCSS.about}>
        <Header />
        <div className={AboutCSS.aboutInfoSection}>
          <h1 id={AboutCSS.title}>Om Stubinen</h1>
          <p>Stubinen är en filmförening för studenter av stundenter. Vi visar 8 varierade filmer från olika genrer per termin på biografen CNEMA på andra sidan strömmen från campus Norrköping. Ett medlemskap kostar 70 kr per termin och låter dig se bra film till billigt pris. Även om du inte studerar på Linköpings universitet kan du bli medlem och ta del av allt Stubinen har att erbjuda!</p>
        </div>
        <h1 id={AboutCSS.title}>Styrelsen 24/25</h1>
        <div className={AboutCSS.profiles}>
          <ProfileCard name="Samuel" role="Ordförande" imageSrc={mclovin}/>
          <ProfileCard name="Yehya" role="Kassör" imageSrc={mclovin}/>
          <ProfileCard name="Chloe" role="Eventansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Ada" role="Filmansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Axel" role="Marknadsföringsansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Natalie" role="Marknadsföringsansvarig" imageSrc={mclovin}/>
          <ProfileCard name="Ludwig" role="Webbansvarig" imageSrc={mclovin}/>
        </div>
      </div>
    )
  }
  
  export default About