import {db} from "./firebase";
import { updateDoc, doc } from 'firebase/firestore';

function EditUserForm({onClose, ...props}) {

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        try {
            // Reference to the document in the Users collection
            const userDocRef = doc(db, 'Users', props.user.id);
            
            // Update the document with new data
            await updateDoc(userDocRef, payload);
            
            onClose();

            console.log('Document updated successfully');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
        
    };

    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Edit user</h2>
            <form onSubmit={submitForm}>
                <input defaultValue={props.user.first_name} type="text" name="first_name" placeholder="Förnamn" required/>
                <input defaultValue={props.user.last_name} type="text" name="last_name" placeholder="Efternamn" required/>
                <input defaultValue={props.user.email} type="email" name="email" placeholder="Epost" required/>

                <label htmlFor="membership">Medlemskapstyp</label>
                <select defaultValue={props.user.membership} name="membership">
                    <option value="Normal">Normal</option>
                    <option value="Gold">Gold</option>
                    <option value="Boardmember">Boardmember</option>
                    <option value="Not payed">Inte betalat</option>
                </select>

                <label htmlFor="kar_medlemskap">Kårmedlemskap</label>
                <select defaultValue={props.user.kar_medlemskap} name="kar_medlemskap">
                    <option value="Ingen (men är student)">Ingen (men är student)</option>
                    <option value="Ej student">Ej student</option>
                    <option value="LinTek">LinTek</option>
                    <option value="Consensus">Consensus</option>
                    <option value="StuFF">StuFF</option>
                </select>

                <input defaultValue={props.user.personnummer} type="text" name="personnummer" placeholder="Personnummer" required/>
                <input defaultValue={props.user.adress} type="text" name="adress" placeholder="Adress" required/>
                <input defaultValue={props.user.postnummer} type="text" name="postnummer" placeholder="Postnummer" required/>
                <input defaultValue={props.user.stad} type="text" name="stad" placeholder="Stad" required/>
                <input defaultValue={props.user.telefonnummer} type="text" name="telefonnummer" placeholder="Telefonnummer" required/>

                <label htmlFor="gender">Kön</label>
                <select defaultValue={props.user.gender} name="gender">
                    <option value="Kvinna">Kvinna</option>
                    <option value="Man">Man</option>
                    <option value="Ickebinär">Ickebinär</option>
                    <option value="Vill ej ange">Vill ej ange</option>
                </select>

                <button type="submit">Uppdatera information</button>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default EditUserForm