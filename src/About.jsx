import Header from "./Header.jsx"
import ProfileCard from "./ProfileCard.jsx"

function About() {

    return (
      <div>
        <Header />
        <h1 id="titel-h1">Styrelsen</h1>
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