import MemberCard from "./MemberCard"
import NormalMemberCSS from "./styles/NormalMember.module.css"

function NormalMember(props) {
    
    return (
      <div>
        <h1 id={NormalMemberCSS.bigTitle}>Välkommen {props.data.first_name}</h1>
        <MemberCard data={props.data}/>
        <h1 id={NormalMemberCSS.title}>Normal member</h1>
      </div>
    )
}
  
  export default NormalMember
