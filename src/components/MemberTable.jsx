import {db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import MemberTableCSS from "./styles/MemberTable.module.css"

function MemberTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className={MemberTableCSS.container}>
      <h2>User List</h2>
      <table className={MemberTableCSS.userTable}>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Kårmedlemskap</th>
            <th>Personnummer</th>
            <th>Adress</th>
            <th>Postnummer</th>
            <th>Stad</th>
            <th>Telefonnummer</th>
            <th>Gender</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
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
    )
}
  
  export default MemberTable