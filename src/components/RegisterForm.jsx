import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "./firebase";
import {setDoc, doc} from "firebase/firestore";

function RegisterForm({onClose}) {

    const [registerFirstPage, setRegisterFirstPage] = useState(true);
    
    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        try {
            await createUserWithEmailAndPassword(auth, payload.email, payload.password);
            const user = auth.currentUser;

            // If user was successfully registered
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    kar_medlemskap: payload.kar_medlemskap,
                    personnummer: payload.personnummer,
                    adress: payload.adress,
                    postnummer: payload.postnummer,
                    stad: payload.stad,
                    telefonnummer: payload.telefonnummer,
                    gender: payload.gender,
                    membership: "Not payed",
                });
            }
            console.log(user);
            console.log("User registered successfully");
            window.location.href="/profile";

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Registrera</h2>
            <form onSubmit={submitForm}>
                <div className={`${registerFirstPage ? '' : 'hidden'}`}>
                    <input type="text" name="first_name" placeholder="Förnamn" required/>
                    <input type="text" name="last_name" placeholder="Efternamn" required/>
                    <input type="email" name="email" placeholder="Epost" required/>
                
                    <label htmlFor="kar_medlemskap">Kårmedlemskap</label>
                    <select name="kar_medlemskap">
                        <option value="Ingen (men är student)">Ingen (men är student)</option>
                        <option value="Ej student">Ej student</option>
                        <option value="LinTek">LinTek</option>
                        <option value="Consensus">Consensus</option>
                        <option value="StuFF">StuFF</option>
                    </select>
                    
                    <input type="password" name="password" placeholder="Lösenord" required/>
                    <input type="password" name="repeat_password" placeholder="Upprepa Lösenord" required/>

                    <button type="button" onClick={() => setRegisterFirstPage(false)}>Nästa</button>
                </div>

                <div className={`${registerFirstPage ? 'hidden' : ''}`}>
                    <input type="text" name="personnummer" placeholder="Personnummer" required/>
                    <input type="text" name="adress" placeholder="Adress" required/>
                    <input type="text" name="postnummer" placeholder="Postnummer" required/>
                    <input type="text" name="stad" placeholder="Stad" required/>
                    <input type="text" name="telefonnummer" placeholder="Telefonnummer" required/>

                    <label htmlFor="gender">Kön</label>
                    <select name="gender">
                        <option value="Kvinna">Kvinna</option>
                        <option value="Man">Man</option>
                        <option value="Ickebinär">Ickebinär</option>
                        <option value="Vill ej ange">Vill ej ange</option>
                    </select>
                    
                    <button type="button" onClick={() => setRegisterFirstPage(true)}>Föregående</button>
                    <button type="submit">Registrera</button>
                </div>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default RegisterForm