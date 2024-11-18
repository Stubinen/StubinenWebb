import MemberCard from "./MemberCard"

function NormalMember(props) {
    
    return (
      <div>
        <h1>Normal</h1>
        <MemberCard data={props.data}/>
      </div>
    )
}
  
  export default NormalMember
