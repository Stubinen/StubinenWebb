import BoardmemberCSS from "./styles/Boardmember.module.css"

function Boardmember(props) {
    
    return (
      <div className={BoardmemberCSS.container}>
        <h1 id={BoardmemberCSS.bigTitle}>Välkommen {props.data.first_name}</h1>
      </div>
    )
}
  
  export default Boardmember
