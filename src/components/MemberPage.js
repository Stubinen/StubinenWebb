import React, { Component } from 'react';
import '../styles/MemberPage.css';
import {Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { PayedAPI } from '../services/api';
class MemberPage extends Component{
    constructor(){
        super();
        this.state = JSON.parse(sessionStorage.getItem('userData'));
        console.log(this.state)
        this.activate = this.activate.bind(this);

    }
    activate(){
        PayedAPI(this.state.id).then(function(v){
            console.log(v);
        }.bind(this));;
        this.setState({
            paymentstatus: "pending",
        })
    }

    render(){
        if(sessionStorage.getItem('userData')){
            if(this.state.Membership == "boardmember"){
                return (<Redirect to={'/Admin'}/>)
            }
            if(this.state.Membership == "inactive"){
                if(this.state.paymentstatus == "pending"){
                    return(
                        <div className="Bod">
                        <aside className="profile-card">
                        <header>
                          <h1>Vi verifierar din betalning</h1>
                          <h2>Har du betalat kan du gå på film visningen så verifierar vi din betalning där.</h2>
                        </header>
                      </aside>
                      </div>
                    );
                }
                return(
                    <div className="Bod">
                    <aside className="profile-card">
                    <header>
                      <h1>Hej! </h1>
                      <h2>Swisha 70kr till 073-545 57 25 för att aktivera ditt konto</h2>
                    </header>
                    <div className="activate-panel">
                      <input  className="button"  placeholder="Jag har swishat" onClick={this.activate}></input>
                    </div>
                  </aside>
                  </div>
                );
            }
            return(
                <div className="Bod">
                <aside className="profile-card">
                <header>
                  <h1>{this.state.FirstName + " " + this.state.LastName}</h1>
                  <h2>{this.state.Membership}</h2>
                </header>
                <div className="profile-bio">
                  <p>
                    “I am serious. And don’t call me Shirley.”
                    -Airplane (1980)
                  </p>
                </div>
                <a href="/"><FontAwesomeIcon icon={faHome} className="icon"/></a>
              </aside>
              </div>
            );
        }
        return (<Redirect to={'/Login'}/>)
    }
}
export default MemberPage
