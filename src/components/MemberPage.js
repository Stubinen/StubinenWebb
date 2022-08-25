import React, { Component } from 'react';
import '../styles/MemberPage.css';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { PayedAPI } from '../services/api';
import {translate} from '../services/Local';
class MemberPage extends Component{
    constructor(){
        super();
		this.state = JSON.parse(sessionStorage.getItem('userData'));
		this.state = {...this.state, logout: false}
        this.activate = this.activate.bind(this);

    }
    activate(){
        PayedAPI(this.state.id).then(function(v){
            console.log(v);
        }.bind(this));
        this.setState({
            paymentstatus: "pending",
        })
        let uD = this.state;
        uD.paymentstatus = "pending";
        console.log(uD);
        sessionStorage.setItem('userData', JSON.stringify(uD));
	}
	logout(){
		sessionStorage.removeItem('userData');
		this.setState({
			logout: true,
		})
	}

    render(){
		if(this.state.logout){
			return (<Redirect to={'/'}/>)
		}
        if(sessionStorage.getItem('userData')){
            if(this.state.Membership === "boardmember"){
                return (<Redirect to={'/Admin'}/>)
            }
            if(this.state.Membership === "inactive"){
                if(this.state.paymentstatus === "pending"){
                    return(
                        <div className="Bod">
                        <aside className="profile-card">
                        <header>
                          <h1>Vi verifierar din betalning</h1>
                          <h2>Har du betalat kan du gå på filmvisningen så verifierar vi din betalning där.</h2>
                        </header>
                      </aside>
					  <div className="logoutButton" onClick={() => this.logout()} >{translate("Logga ut")}</div>
                      </div>

                    );
                }
                return(
                    <div className="Bod">
                    <aside className="profile-card">
                    <header>
                      <h1>Hej! </h1>
                      <h2>Swisha 70kr till 072 394 68 07 för att aktivera ditt konto</h2>
                    </header>
                    <div className="activate-panel">
                      <input  className="button"  placeholder="Jag har swishat" onClick={this.activate}></input>
                    </div>
                  </aside>
				  <div className="logoutButton" onClick={() => this.logout()} >{translate("Logga ut")}</div>
                  </div>

                );
            }
            if(this.state.Membership == "gold"){
                return(
                <div className="Bod">
                <aside className="profile-card gold">
                <header>
                  <h1>{this.state.FirstName + " " + this.state.LastName}</h1>
                  <h2>Guldmedlem</h2>
                </header>
                <div className="profile-bio">

                </div>
                <a href="/"><FontAwesomeIcon icon={faHome} className="icon"/></a>
              </aside>
			  <div className="logoutButton" onClick={() => this.logout()} >{translate("Logga ut")}</div>
              </div>
          );

            }
            return(
                <div className="Bod">
                <aside className="profile-card">
                <header>
                  <h1>{this.state.FirstName + " " + this.state.LastName}</h1>
                  <h2>Aktiv Medlem</h2>
                </header>
                <div className="profile-bio">

                </div>
                <a href="/"><FontAwesomeIcon icon={faHome} className="icon"/></a>
              </aside>
			  <div className="logoutButton" onClick={() => this.logout()} >{translate("Logga ut")}</div>
              </div>
            );
        }
        return (<Redirect to={'/Login'}/>)
    }
}
export default MemberPage
