
function LoginForm({onClose}) {
    
    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Logga in</h2>
            <form>
                <input type="email" placeholder="Epost" required/>
                <input type="password" placeholder="Lösenord" required/>
                <button type="submit">Logga In</button>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default LoginForm