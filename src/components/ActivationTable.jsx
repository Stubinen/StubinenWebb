import {db} from "./firebase";
import { collection, getDocs, where, query, updateDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ActivationTableCSS from "./styles/ActivationTable.module.css"

function ActivationTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activatedUsers, setActivatedUsers] = useState({});

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

    const activateUser = async (docId) => {

      try {
          // Reference to the document in the Users collection
          const userDocRef = doc(db, 'Users', docId);
          
          // Update the document with new data
          await updateDoc(userDocRef, {membership: "Normal"});
  
          console.log('Document updated successfully');

          setActivatedUsers(prevState => ({ ...prevState, [docId]: true }));
      } catch (error) {
          console.error('Error updating document: ', error);
      }
    };

    if (loading) return <p>Loading...</p>;

    return (
      <div className={ActivationTableCSS.container}>
      <h2>Konton som behöver aktiveras</h2>
      <ul>
      {users.map(user => {
          const isActivated = activatedUsers[user.id];  // Get the activation state from the `activatedUsers` object

          const handleActivate = () => {
            activateUser(user.id);  // Activate the user
          };

          return (
            <li
              key={user.id}
              onClick={handleActivate}  // Handle click to activate
              style={{ display: isActivated ? 'none' : 'block' }}  // Conditionally hide the li
            >
              {user.first_name + " " + user.last_name}
            </li>
          );
        })}
      </ul>
    </div>
    )
}
  
  export default ActivationTable