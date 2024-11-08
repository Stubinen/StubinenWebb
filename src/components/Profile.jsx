import { useEffect, useState } from "react"
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
    // Lägg till check för att kolla om man är inloggad, om man har betalat, vilket medlemsskap man har

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        const docRef = doc(db, "Users", user.uid);
        const userInfo = await getDoc(docRef);
        if(userInfo.exists()) {
          setUserDetails(userInfo.data());
        }
      });
    }

    useEffect(() => {
      fetchUserData();
    }, []);

    async function handleLogout(){
      try {
        await auth.signOut();
        window.location.href="/";

      } catch (error) {
        console.log("Error logging out: ", error.message);
      }

    }

    return (
      <div>
        {userDetails ? (
          <>
            <h1>Welcome {userDetails.first_name}</h1>
            <button onClick={handleLogout}>Sign out</button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}
  
export default Profile