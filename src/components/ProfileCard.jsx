
function ProfileCard(props) {

    return (
      <div className="profileCard">
        <img src={props.imageSrc} alt="Temp" />
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
      </div>
    )
}
  
  export default ProfileCard