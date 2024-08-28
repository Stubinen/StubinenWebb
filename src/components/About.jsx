import Header from "./Header.jsx"
import ProfileCard from "./ProfileCard.jsx"

function About() {

    return (
      <div className="about">
        <Header />
        <div className="aboutInfoSection">
          <h1 id="titel-h1">Om Stubinen</h1>
          <p id="aboutText">Stubinen är en filmförening för studenter av stundenter. Vi visar 8 varierade filmer från olika genrer per termin på biografen CNEMA på andra sidan strömmen från campus Norrköping. Ett medlemskap kostar 70 kr per termin och låter dig se bra film till billigt pris. Även om du inte studerar på Linköpings universitet kan du bli medlem och ta del av allt Stubinen har att erbjuda!</p>
        </div>
        <h1 id="titel-h1">Styrelsen 24/25</h1>
        <div className="profiles">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    )
  }
  
  export default About