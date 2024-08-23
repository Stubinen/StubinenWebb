import {signUpWithEmail} from "../supabase backend/auth.js"

function RegisterForm({onClose}) {

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        await signUpWithEmail(payload.email, payload.password, payload);
    };

    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Registrera</h2>
            <form onSubmit={submitForm}>
                <input type="email" name="email" placeholder="Epost" required/>
                <input type="password" name="password" placeholder="Lösenord" required/>
                <input type="text" name="firstName" placeholder="Förnamn" required/>
                <input type="text" name="lastName" placeholder="Efternamn" required/>
                <button type="submit">Registrera</button>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default RegisterForm