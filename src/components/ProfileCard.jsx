import ProfileCardCSS from "./styles/ProfileCard.module.css"

function ProfileCard(props) {

    return (
      <div className={ProfileCardCSS.profileCard}>
        <img src={props.imageSrc} alt="Temp" loading="lazy"/>
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
      </div>
    )
}
  
  export default ProfileCard