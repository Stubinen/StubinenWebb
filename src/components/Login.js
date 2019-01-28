import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/Login.css';
import {LoginAPI} from '../services/api';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false,
            errorMessage: '',
            userData: {},

        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    WrongPassword(){
        this.setState({
            password: '',
        })
    }
    login() {
        if(this.state.email && this.state.password){
            LoginAPI(this.state.email, this.state.password).then(function(v){
                if(v.data != null){
                    if(v.data.error != null){
                        this.setState({
                            errorMessage: "Fel lösenord eller email."
                        })
                        this.WrongPassword();
                    }
                    else{
                        sessionStorage.setItem('userData', JSON.stringify(v.data));
                        this.setState({
                            redirectToReferrer: true
                        })

                    }
                }
            }.bind(this));
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
            return (<Redirect to={'/MemberPage'}/>)
        }
        return (
                <div className="form-wrapper">
                <h1>Logga in</h1>
                <p class="ErrorMessage">{this.state.errorMessage}</p>
                <form>
                  <div class="form-item">
                    <label for="email"></label>
                    <input type="email" name="email" required="required" placeholder="Email" onChange={this.onChange}/>
                  </div>
                  <div class="form-item">
                    <label for="password"></label>
                    <input type="password" name="password" required="required" placeholder="Lösenord" value={this.state.password} onChange={this.onChange}/>
                  </div>
                  <div class="button-panel">
                    <input class="button" placeholder="Logga in" onClick={this.login}/>
                  </div>
                </form>
                <div class="form-footer">
                  <p><a href="/Register">Skapa konto</a></p>
                  <p><a href="/">Startsida</a></p>
                </div>
              </div>
        );
    }
}
export default Login;
