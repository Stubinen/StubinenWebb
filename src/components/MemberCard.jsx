import MemberCardCSS from "./styles/MemberCard.module.css"

function MemberCard(props) {
    
    return (
      <div id={MemberCardCSS.cardImage}>
        <h1 id={MemberCardCSS.textTop1}>{props.data.personnummer}</h1>
        <h1 id={MemberCardCSS.textMiddle}>06/03/1981</h1>
        <h1 id={MemberCardCSS.textMiddle1}>06/03/2025</h1>
        <h1 id={MemberCardCSS.sex}>{props.data.gender}</h1>
        <h1 id={MemberCardCSS.issueDate}>08/30/2024</h1>
        <h1 id={MemberCardCSS.class}>{props.data.membership}</h1>

        <h1 id={MemberCardCSS.name}>{props.data.first_name + " " + props.data.last_name}</h1>
        <h1 id={MemberCardCSS.adress}>{props.data.adress}</h1>
        <h1 id={MemberCardCSS.stad}>{props.data.stad + ", " + props.data.postnummer}</h1>
      </div>
      
    )
}
  
  export default MemberCard
