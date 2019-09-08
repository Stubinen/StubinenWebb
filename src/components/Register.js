import React, { Component } from 'react';
import '../styles/Register.css';
import {Redirect} from 'react-router-dom';
import {RegisterAPI, LoginAPI} from '../services/api';
import {translate} from '../services/Local';

const h1style = {
    fontFamily: 'Montserrat,helvetica,arial,sans-serif',
    fontSize: '24px',
}

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
          Personnummer:'',
          Adress:'',
          Postnummer:'',
          kar: 'ingen',
          Stad: '',
          Kon: 'Kvinna',
          Telefonnummer:'',
          ErrorText: '',
          redirectToReferrer: false,
          page:0,
      };
      this.onChange = this.onChange.bind(this);
      this.Register = this.Register.bind(this);
      this.renderPage = this.renderPage.bind(this);

    }
    Register(){
        this.setState({
            ErrorText :'',
        });
        if(this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.validateEmail(this.state.email) && this.validatePassword(this.state.password) == "" && this.state.password.length > 0 && this.CheckAllFields()){
            RegisterAPI(this.state.email, this.state.password, this.state.firstname, this.state.lastname, this.state.kar, this.state.Personnummer, this.state.Adress, this.state.Postnummer, this.state.Stad, this.state.Kon, this.state.Telefonnummer).then(function(r) {
                if(r.data.success != null){
                    LoginAPI(this.state.email, this.state.password).then(function(v){
                        if(v.data != null){
                            if(v.data.error != null){
                                this.setState({
                                    ErrorText: translate("Fel lösenord eller email.")
                                })
                                console.log(v.data);
                                console.log("v.data.error");
                            }
                            else{
                                sessionStorage.setItem('userData', JSON.stringify(v.data));
                                console.log(v.data);
                                console.log("no v.data.error");
                                this.setState({
                                    redirectToReferrer: true,
                                })
                            }
                        }
                    }.bind(this));


                }
                if(r.data.error != null){
                    this.setState({
                        ErrorText: r.data.error
                    })
                }
            }.bind(this))
        }
        else{

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
            return translate("Lösenordet behöver minst 8 karaktärer");
        }
        if(!(/\d/.test(password))){
            return translate("Lösenordet måste innehålla minst en siffra");
        }
        if(!(/[A-Z]/.test(password))){
            return translate("Lösenordet måste innehålla minst en stor bokstav");
        }
        if(!(/[a-z]/.test(password))){
            return translate("Lösenordet måste innehålla minst en liten bokstav");
        }
        return "";
    }
    CheckAllFields(){
        if(this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.kar.length >0 && this.state.Personnummer.length >0 && this.state.Adress.length > 0 && this.state.Postnummer.length > 0 && this.state.Stad.length > 0 && this.state.Kon.length > 0 ){
            this.setState({
                ErrorText: "",
            })
            return true;
        }
        else{
            this.setState({
                ErrorText: translate("Fyll i hela formuläret"),
            })
            console.log(this.state);
            return false;
        }
    }
    changePage(i){
        this.setState({
            page: this.state.page + i,
        })
    }
    renderPage(){
        if(this.state.page == 0){
            return(<div className="form-wrapper-register">
            <h1 style={ h1style }>{translate("Skapa konto")}</h1>
            <p className="WarningText">{this.state.ErrorText}</p>
            <form>
              <div className="form-item">
                <label for="Förnamn"></label>
                <input type="text" name="firstname" required="required" placeholder={translate("Förnamn")} value={this.state.firstname} onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                <label for="Efternamn"></label>
                <input type="text" name="lastname" required="required" placeholder={translate("Efternamn")} value={this.state.lastname}  onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                <label for="email"></label>
                <input type="email" name="email" required="required" placeholder="Email" value={this.state.email}  onChange={this.onChange}></input>
                <p className="WarningText">{this.validateEmail(this.state.email) || this.state.email.length < 8? "": translate("Ange en korrekt email")}</p>
              </div>
              <div className="form-item">
                  <label for="kar">{translate("Kårmedlemskap")}</label>
                  <select name="kar" value={this.state.kar} onChange={this.onChange}>
                       <option value="ingen">{translate("ingen (men är student)")}</option>
                       <option value="ej student">{translate("Ej student")}</option>
                       <option value="LinTek">LinTek</option>
                       <option value="Consensus">Consensus</option>
                       <option value="StuFF">StuFF</option>
                  </select>
              </div>
              <div className="form-item">
                <label for="password"></label>
                <input type="password" name="password" required="required" placeholder={translate("Lösenord")} value={this.state.password} onChange={this.onChange}></input>
                  <p className="WarningText">{this.validatePassword(this.state.password)}</p>
              </div>
              <div className="form-item">
                <label for="password"></label>
                <input type="password" name="verifyPassword" required="required" placeholder={translate("Upprepa Lösenord")} value={this.state.verifyPassword}  onChange={this.onChange}></input>
                <p className="WarningText">{this.state.password != this.state.verifyPassword && this.state.verifyPassword.length > 0? translate("Lösenordet matchar inte!") : ""}</p>
              </div>
              <div className="button-panel">
                <input  className="button"  placeholder={translate("Nästa")}  onClick={() => this.changePage(1)}></input>
              </div>
            </form>
            <div className="form-footer">
              <p style={{marginBottom:0}}><a href="/Login">{translate("Logga in")}</a></p>
              <p style={{marginBottom:0}}><a href="/">{translate("Startsida")}</a></p>
            </div>
        </div>);
        }
        else{
            return(<div className="form-wrapper-register">
            <h1 style={ h1style }>{translate("Skapa konto")}</h1>
            <p className="WarningText">{this.state.ErrorText}</p>
            <form>
              <div className="form-item">
                <label for="Personnummer"></label>
                <input type="text" name="Personnummer" required="required" placeholder={translate("Personnummer")} value={this.state.Personnummer} onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                <label for="Adress"></label>
                <input type="text" name="Adress" required="required" placeholder={translate("Adress")} value={this.state.Adress}  onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                <label for="Postnummer"></label>
                <input type="text" name="Postnummer" required="required" placeholder={translate("Postnummer")} value={this.state.Postnummer}  onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                <label for="Stad"></label>
                <input type="text" name="Stad" required="required" placeholder={translate("Stad")}  value={this.state.Stad} onChange={this.onChange}></input>
              </div>
              <div className="form-item">
                  <label for="Kon">{translate("Kön: ")}</label>
                  <select name="Kon" value={this.state.Kon} onChange={this.onChange}>
                        <option value="Kvinna">{translate("Kvinna")}</option>
                        <option value="Man">{translate("Man")}</option>
                        <option value="non-binary">{translate("icke binär")}</option>
                  </select>
              </div>
              <div className="form-item">
                <label for="Telefonnummer"></label>
                <input type="text" name="Telefonnummer" required="required" placeholder={translate("Telefonnummer")} value={this.state.Telefonnummer} onChange={this.onChange}></input>
              </div>
              <div className="button-panel">
                <input  className="button"  placeholder={translate("Föregående")}  onClick={() => this.changePage(-1)}></input>
                <input  className="button"  placeholder={translate("Registrera")}  onClick={this.Register}></input>
              </div>
            </form>
            <div className="form-footer">
              <p style={{marginBottom:0}}><a href="/Login">{translate("Logga in")}</a></p>
              <p style={{marginBottom:0}}><a href="/">{translate("Startsida")}</a></p>
            </div>
        </div>);
        }
    }

      render() {
          if (this.state.redirectToReferrer){
              return (<Redirect to={'/MemberPage'}/>)
          }
          return(
              <div>
              {this.renderPage()}
              </div>
        );
      }
}


export default Register
