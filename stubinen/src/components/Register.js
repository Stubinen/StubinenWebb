import React, { Component } from 'react';
import '../styles/Register.css';
import {Redirect} from 'react-router-dom';
import {RegisterAPI} from '../services/api';

class Register extends Component {

    constructor(props) {
      super(props);
      this.state = {
          firstname: '',
          lastname: '',
          email: '',
          isStudent: false,
          password: '',
          verifyPassword:'',
          kar: 'ingen',
          ErrorText: '',
          redirectToReferrer: false,
      };
      this.onChange = this.onChange.bind(this);
      this.Register = this.Register.bind(this);

    }
    Register(){
        this.setState({
            ErrorText :'',
        });
        if(this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.validateEmail(this.state.email) && this.validatePassword(this.state.password) == "" && this.state.password.length > 0){
            RegisterAPI(this.state.email, this.state.password, this.state.firstname, this.state.lastname, this.state.kar).then(function(r) {
                console.log(r);
                if(r.data.success != null){
                    this.setState({
                        redirectToReferrer: true,
                    })
                }
                if(r.data.error != null){
                    this.setState({
                        ErrorText: r.data.error
                    })
                }
            }.bind(this))
        }
        else{
            console.log(this.state);
        }
    }

    onChange(e){
        if(e.target.id == "isStudent"){
            this.setState({
                isStudent: !(this.state.isStudent),
            })
        }
        else{
            this.setState({[e.target.name]:e.target.value});
        }
        console.log(e.target.name + " : " + e.target.value);
    }

    validateEmail(email) {
      var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(email);
    }
    validatePassword(password){
        if(password.length == 0){
            return "";
        }
        if(password.length < 8){
            return "Lösenordet behöver minst 8 karaktärer";
        }
        if(!(/\d/.test(password))){
            return "Lösenordet måste innehålla minst en siffra";
        }
        if(!(/[A-Z]/.test(password))){
            return "Lösenordet måste innehålla minst en stor bokstav";
        }
        if(!(/[a-z]/.test(password))){
            return "Lösenordet måste innehålla minst en liten bokstav";
        }
        return "";
    }

      render() {
          if (this.state.redirectToReferrer){
              return (<Redirect to={'/MemberPage'}/>)
          }
          return(
                  <div className="form-wrapper-register">
                  <h1>Skapa konto</h1>
                  <p className="WarningText">{this.state.ErrorText}</p>
                  <form>
                    <div className="form-item">
                      <label for="Förnamn"></label>
                      <input type="text" name="firstname" required="required" placeholder="Förnamn" onChange={this.onChange}></input>
                    </div>
                    <div className="form-item">
                      <label for="Efternamn"></label>
                      <input type="text" name="lastname" required="required" placeholder="Efternamn" onChange={this.onChange}></input>
                    </div>
                    <div className="form-item">
                      <label for="email"></label>
                      <input type="email" name="email" required="required" placeholder="Email" onChange={this.onChange}></input>
                      <p className="WarningText">{this.validateEmail(this.state.email) || this.state.email.length < 8? "": "Ange en korrekt email"}</p>
                    </div>
                    <div className="form-item">
                        <label for="kar">Kårmedlemskap?</label>
                        <select name="kar" onChange={this.onChange}>
                             <option value="ingen">ingen (men är student)</option>
                             <option value="ej student">Ej student</option>
                             <option value="LinTek">LinTek</option>
                             <option value="Consensus">Consensus</option>
                             <option value="StuFF">StuFF</option>
                        </select>
                    </div>
                    <div className="form-item">
                      <label for="password"></label>
                      <input type="password" name="password" required="required" placeholder="Lösenord" onChange={this.onChange}></input>
                        <p className="WarningText">{this.validatePassword(this.state.password)}</p>
                    </div>
                    <div className="form-item">
                      <label for="password"></label>
                      <input type="password" name="verifyPassword" required="required" placeholder="Upprepa Lösenord" onChange={this.onChange}></input>
                      <p className="WarningText">{this.state.password != this.state.verifyPassword && this.state.verifyPassword.length > 0? "Lösenordet matchar inte!" : ""}</p>
                    </div>
                    <div className="button-panel">
                      <input  className="button"  placeholder="Registrera"  onClick={this.Register}></input>
                    </div>
                  </form>
                  <div className="form-footer">
                    <p><a href="/Login">Logga in</a></p>
                    <p><a href="/">Startsida</a></p>
                  </div>
              </div>
        );
      }
}


export default Register
