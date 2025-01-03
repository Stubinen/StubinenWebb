import Header from "./Header.jsx"
import ProfileCard from "./ProfileCard.jsx"
import mclovin from "../img/mcLovin.jpg"
import AboutCSS from "./styles/About.module.css"
import { useTranslation } from "react-i18next"

function About() {
    const { t } = useTranslation();

    return (
      <div className={AboutCSS.about}>
        <Header />
        <div className={AboutCSS.aboutInfoSection}>
          <h1 id={AboutCSS.title}>{t('Navbar-about')}</h1>
          <p>{t('About-desc')}</p>
        </div>
        <h1 id={AboutCSS.title}>{t('About-board')}</h1>
        <div className={AboutCSS.profiles}>
          <ProfileCard name="Samuel" role={t('About-ordf')} imageSrc={mclovin}/>
          <ProfileCard name="Yehya" role={t('About-kass')} imageSrc={mclovin}/>
          <ProfileCard name="Chloe" role={t('About-event')} imageSrc={mclovin}/>
          <ProfileCard name="Ada" role={t('About-film')} imageSrc={mclovin}/>
          <ProfileCard name="Axel" role={t('About-pr')} imageSrc={mclovin}/>
          <ProfileCard name="Natalie" role={t('About-pr')} imageSrc={mclovin}/>
          <ProfileCard name="Ludwig" role={t('About-webb')} imageSrc={mclovin}/>
        </div>
      </div>
    )
  }
  
  export default About