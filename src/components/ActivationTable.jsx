import {db} from "./firebase";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ActivationTableCSS from "./styles/ActivationTable.module.css"

function ActivationTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'Users');
        const usersQuery = query(usersRef, where("membership", "==", "Not payed"));
        const querySnapshot = await getDocs(usersQuery);

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
      <div className={ActivationTableCSS.container}>
      <h2>Konton som behöver aktiveras</h2>
      <ul>
          {users.map(user => (
            <li key={user.id}>{user.first_name + " " + user.last_name}</li>
          ))}
      </ul>
    </div>
    )
}
  
  export default ActivationTable