
function RegisterForm({onClose}) {
    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Registrera</h2>
            <form>
                <input type="email" placeholder="Epost" required/>
                <input type="password" placeholder="Lösenord" required/>
                <input type="text" placeholder="Förnamn" required/>
                <input type="text" placeholder="Efternamn" required/>
                <button type="submit">Registrera</button>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default RegisterForm