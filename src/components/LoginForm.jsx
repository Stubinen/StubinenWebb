
function LoginForm({onClose}) {
    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        console.log(payload);
    };

    return (
    <div className="overlay">
        <div className="form-container">
            <h2>Logga in</h2>
            <form onSubmit={submitForm}>
                <input type="email" name="email" placeholder="Epost" required/>
                <input type="password" name="password" placeholder="Lösenord" required/>
                <button type="submit">Logga In</button>
                <button type="button" onClick={onClose}>Stäng</button>
            </form>
        </div>
    </div>
    )
  }
  
  export default LoginForm