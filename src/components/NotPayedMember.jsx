import NotPayedMemberCSS from "./styles/NotPayedMember.module.css"

function NotPayedMember(props) {
    
    return (
      <div className={NotPayedMemberCSS.container}>
        <h1 id={NotPayedMemberCSS.bigTitle}>Välkommen {props.data.first_name}</h1>
        <h1 id={NotPayedMemberCSS.title}>För att aktivera ditt medlemskap var god och swisha 70 kr till:</h1>
        <h1 id={NotPayedMemberCSS.number}>072 033 35 56</h1>
        <h1 id={NotPayedMemberCSS.title}>Så bekräftar vi medlemskapet på plats!</h1>
      </div>
    )
}
  
  export default NotPayedMember
