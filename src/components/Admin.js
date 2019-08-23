import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Search from "@material-ui/icons/Search";
import Done from "@material-ui/icons/HowToReg";
import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import ActivateMembers from "./ActivateMembers";
import {Redirect} from 'react-router-dom';
import AllMembers from "./AllMembers";
import { MemberCountAPI, ActiveMemberCountAPI } from '../services/api';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
},
  Button: {
      color: "#fff"
  },
  Icon:{
      width:60,
      height: 60,
  }
};


class Admin extends Component{
    constructor(){
        super();
        this.state = {
          top: false,
          content: 0,
          MemberCount:0,
          ActiveMemberCount:0,
		};
		let userData = JSON.parse(sessionStorage.getItem('userData'))
		this.state = {...this.state, userData}
		console.log(this.state);

        this.MemberCount = this.MemberCount.bind(this);
    }
    componentDidMount(){
        this.MemberCount();
    }
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open
      });
    };
    menuClick(i){
        console.log(i);
        this.setState({
            content: i,
        })
    }
    MemberCount(){
        MemberCountAPI().then(function(r){
            this.setState({
                MemberCount: r.data.Count,
            })
        }.bind(this))
        ActiveMemberCountAPI().then(function(r){
            this.setState({
                ActiveMemberCount: r.data.Count,
            })
        }.bind(this))
    }
    getContent(){
        if(this.state.content == 0){
            return(
                <div>
                    <h1>Välkommen till Admin sidan!</h1>
                    <h1>Antal medlemmar: {" " + this.state.MemberCount} </h1>
                    <h1>Antal betalande medlemmar: {" " + this.state.ActiveMemberCount} </h1>
                </div>
            );
        }
        if(this.state.content == 1){
            return(
                <ActivateMembers />
            );
        }
        if(this.state.content == 2){
            return(
                <AllMembers />
            );
        }
    }
    render(){
		if(this.state.userData === null||this.state.userData.Membership !== "boardmember"){
			return (<Redirect to={'/Login'}/>)
		}
        const fullList = (
          <div>
            <List>
              {["Hem","Aktivera medlemskap", "Hitta Medlemmar"].map((text, index) => (
                <ListItem button key={text} onClick={() => this.menuClick(index)}>
                  <ListItemIcon>
                    {index === 0 ? <Home /> : index===1?<Done /> : <Search />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        );
        return (
        <div>
          <div>
            <Button style= {styles.Button}onClick={this.toggleDrawer("top", true)}><Menu style= {styles.Icon}/></Button>
            <Drawer
              anchor="top"
              open={this.state.top}
              onClose={this.toggleDrawer("top", false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer("top", false)}
                onKeyDown={this.toggleDrawer("top", false)}
              >
                {fullList}
              </div>
            </Drawer>
          </div>
          <div>
            {this.getContent()}
          </div>
          </div>

        );
    }
}
export default Admin
