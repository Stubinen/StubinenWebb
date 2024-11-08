import { useEffect, useState } from "react"
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import ProfileCSS from "./styles/Profile.module.css"

import GoldMember from "./GoldMember"
import NormalMember from "./NormalMember"
import Boardmember from "./Boardmember"
import NotPayedMember from "./NotPayedMember"

function Profile() {
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

    // Makes sure user is not in /profile page if not signed in
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (!user) {
          window.location.href = "/";
        }
      });
    });

    useEffect(() => {
      fetchUserData();
    }, []);

    function UserBasedComponent(){
      if(userDetails.membership == "Not payed"){
        return <NotPayedMember data={userDetails}/>
      }
      else if(userDetails.membership == "Boardmember"){
        return <Boardmember data={userDetails}/>
      }
      else if(userDetails.membership == "Gold"){
        return <GoldMember data={userDetails}/>
      }
      else if(userDetails.membership == "Normal"){
        return <NormalMember data={userDetails}/>
      }
    }

    return (
      <div className={ProfileCSS.container}>
        {userDetails ? (
          <>
            <UserBasedComponent/>
          </>
        ) : (
          <div className={ProfileCSS.loadingContainer}>
            <p>Loading...</p>
          </div>
        )}
      </div>
    )
}
  
export default Profile