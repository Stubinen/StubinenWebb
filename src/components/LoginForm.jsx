import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useTranslation } from "react-i18next"

function LoginForm({onClose}) {
    const { t } = useTranslation();

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, payload.email, payload.password);
            console.log("User successfully logged in");
            window.location.href="/profile";
            
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Logga in</h2>
            <form onSubmit={submitForm}>
                <input type="email" name="email" placeholder={t('Form-email')} required/>
                <input type="password" name="password" placeholder={t('Form-password')} required/>
                <button type="submit">{t('Navbar-login')}</button>
                <button type="button" onClick={onClose}>{t('Form-close')}</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default LoginForm