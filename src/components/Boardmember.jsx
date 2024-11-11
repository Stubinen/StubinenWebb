import BoardmemberCSS from "./styles/Boardmember.module.css"
import MemberTable from "./MemberTable"
import ActivationTable from "./ActivationTable"
import { useState } from "react";
import MemberCard from "./MemberCard";

function Boardmember(props) {
    const [showUsers, setShowUsers] = useState(false);
    const [showActivation, setShowActivation] = useState(false);

    const handleShowUsers = () => {
      setShowUsers(true);  // Show users
      setShowActivation(false);  // Hide activation table
    };

    const handleShowActivation = () => {
        setShowUsers(false);  // Hide users
        setShowActivation(true);  // Show activation table
    };

    return (
      <div className={BoardmemberCSS.container}>
        <h1 id={BoardmemberCSS.bigTitle}>Välkommen {props.data.first_name}</h1>
        <MemberCard />
        <div>
          <button onClick={handleShowUsers}>VISA MEDLEMMAR</button>
          <button onClick={handleShowActivation}>VISA ICKE-AKTIVERADE MEDLEMMAR</button>
        </div>

        {showUsers && <MemberTable />}
        {showActivation && <ActivationTable />}
      </div>
    )
}
  
  export default Boardmember
