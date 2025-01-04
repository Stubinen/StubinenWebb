import MemberCard from "./MemberCard"
import GoldMemberCSS from "./styles/GoldMember.module.css"

function GoldMember(props) {
    
    return (
      <div className={GoldMemberCSS.container}>
        <h1 id={GoldMemberCSS.bigTitle}>Välkommen {props.data.first_name}</h1>
        <MemberCard data={props.data}/>
        <h1 id={GoldMemberCSS.title}>Gold Member</h1>
      </div>
    )
}
  
  export default GoldMember
