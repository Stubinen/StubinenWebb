import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "./firebase";
import {setDoc, doc} from "firebase/firestore";
import { useTranslation } from "react-i18next"

function RegisterForm({onClose}) {
    const { t } = useTranslation();

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
                    aktiv_denna_termin: "No",
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
            <h2>{t('Navbar-register')}</h2>
            <form onSubmit={submitForm}>
                <div className={`${registerFirstPage ? '' : 'hidden'}`}>
                    <input type="text" name="first_name" placeholder={t('Form-firstname')} required/>
                    <input type="text" name="last_name" placeholder={t('Form-lastname')} required/>
                    <input type="email" name="email" placeholder={t('Form-email')} required/>
                
                    <label htmlFor="kar_medlemskap">{t('Form-studentunion')}</label>
                    <select name="kar_medlemskap">
                        <option value="Ingen (men är student)">{t('Form-studentunion-1')}</option>
                        <option value="Ej student">{t('Form-studentunion-2')}</option>
                        <option value="LinTek">{t('Form-studentunion-3')}</option>
                        <option value="Consensus">{t('Form-studentunion-4')}</option>
                        <option value="StuFF">{t('Form-studentunion-5')}</option>
                    </select>
                    
                    <input type="password" name="password" placeholder={t('Form-password')} required/>
                    <input type="password" name="repeat_password" placeholder={t('Form-repeatpassword')} required/>

                    <button type="button" onClick={() => setRegisterFirstPage(false)}>{t('Form-next')}</button>
                </div>

                <div className={`${registerFirstPage ? 'hidden' : ''}`}>
                    <input type="text" name="personnummer" placeholder={t('Form-personalnumber')} required/>
                    <input type="text" name="adress" placeholder={t('Form-address')} required/>
                    <input type="text" name="postnummer" placeholder={t('Form-zipcode')} required/>
                    <input type="text" name="stad" placeholder={t('Form-city')} required/>
                    <input type="text" name="telefonnummer" placeholder={t('Form-phonenumber')} required/>

                    <label htmlFor="gender">{t('Form-gender')}</label>
                    <select name="gender">
                        <option value="Kvinna">{t('Form-gender-1')}</option>
                        <option value="Man">{t('Form-gender-2')}</option>
                        <option value="Ickebinär">{t('Form-gender-3')}</option>
                        <option value="Vill ej ange">{t('Form-gender-4')}</option>
                    </select>
                    
                    <button type="button" onClick={() => setRegisterFirstPage(true)}>{t('Form-previous')}</button>
                    <button type="submit">{t('Navbar-register')}</button>
                </div>
                <button type="button" className="close-button" onClick={onClose}>{t('Form-close')}</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default RegisterForm