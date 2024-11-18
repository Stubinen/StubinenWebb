import MemberCard from "./MemberCard"

function GoldMember(props) {
    
    return (
      <div>
        <h1>GoldMember</h1>
        <MemberCard data={props.data}/>
      </div>
    )
}
  
  export default GoldMember
