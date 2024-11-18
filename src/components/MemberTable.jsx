import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import MemberTableCSS from "./styles/MemberTable.module.css"
import EditUserForm from "./EditUserForm";

function MemberTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastSortedAttribute, setLastSortedAttribute] = useState(true);
  const [showEditUser, setEditUser] = useState(false);

  function editUser(user){
    console.log(user);
    setEditUser(user);
  }

  const handleCloseForm = () => {
    setEditUser(false);
  };

  function sortByAttribute(attribute){ // Sorts the users based on attribute, reverses if already sorted
    var sortedUsers;
    if (attribute != lastSortedAttribute){
      sortedUsers = [...users].sort((a, b) => {
        // Case insensitive string comparison for sorting
        const valueA = a[attribute].toLowerCase(); // Normalize to lowercase for case-insensitive sorting
        const valueB = b[attribute].toLowerCase();
        
        return valueA.localeCompare(valueB);
      });
    }
    else {
      sortedUsers = [...users].reverse();
    }
    
    setUsers(sortedUsers);
    setLastSortedAttribute(attribute);
  }

useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Users'));
        const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
      <>
        {showEditUser && (
          <EditUserForm onClose={handleCloseForm} user={showEditUser}/>
        )}

      <div className={MemberTableCSS.container}>
      <h2>User List</h2>
      <table className={MemberTableCSS.userTable}>
        <thead>
          <tr id={MemberTableCSS.tableTitles}>
            <th onClick={() => sortByAttribute("email")}>Email</th>
            <th onClick={() => sortByAttribute("first_name")}>First Name</th>
            <th onClick={() => sortByAttribute("last_name")}>Last Name</th>
            <th onClick={() => sortByAttribute("kar_medlemskap")}>Kårmedlemskap</th>
            <th onClick={() => sortByAttribute("personnummer")}>Personnummer</th>
            <th onClick={() => sortByAttribute("adress")}>Adress</th>
            <th onClick={() => sortByAttribute("postnummer")}>Postnummer</th>
            <th onClick={() => sortByAttribute("stad")}>Stad</th>
            <th onClick={() => sortByAttribute("telefonnummer")}>Telefonnummer</th>
            <th onClick={() => sortByAttribute("gender")}>Gender</th>
            <th onClick={() => sortByAttribute("membership")}>Membership</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr onClick={() => editUser(user)} key={user.id} style={{cursor: "copy"}}>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.kar_medlemskap}</td>
              <td>{user.personnummer}</td>
              <td>{user.adress}</td>
              <td>{user.postnummer}</td>
              <td>{user.stad}</td>
              <td>{user.telefonnummer}</td>
              <td>{user.gender}</td>
              <td>{user.membership}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
    )
}
  
  export default MemberTable