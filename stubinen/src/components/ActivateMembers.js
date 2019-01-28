import React, { Component } from 'react';
import { MembersOnPendingAPI, ActivateMemberAPI } from '../services/api';

class ActivateMembers extends Component{
    constructor(){
        super();
        this.state = {data:'Nothing'}
        this.getData = this.getData.bind(this);
        this.AcceptMember = this.AcceptMember.bind(this);
    }
    getData(){
        MembersOnPendingAPI().then(function(r){
            console.log(r.data);
            this.setState({
                data: r.data,
            })
        }.bind(this));
    }
    AcceptMember(id){
        ActivateMemberAPI(id).then(function(r){
            if(r.data.success == "Successful"){
                for(var i=0; i < this.state.data.length; i+=1){
                    console.log(this.state.data[i].id + ' : ' + id);
                    if(this.state.data[i].id == id){
                        var temp = this.state.data;
                        temp.splice(i,1);
                        this.setState({
                            data: temp,
                        });
                        console.log(this.state);
                    }
                }

            }
        }.bind(this));
    }

    render(){
        this.getData();
        let{data} = this.state;
        if(this.state.data != 'Nothing'){
            if(this.state.data.NoUsers != null || this.state.data.length < 1){
                return (
                    <div><h1>Inga användare som behöver verifieras</h1></div>
                )
            }
            else{
                var listItems = this.state.data.map((d,index) =>
                  <div style={styles.Members} key={index} onClick={() => this.AcceptMember(d.id)}><p >{d.FirstName + ' ' + d.LastName + ' : ' + d.karMedlemskap}</p></div>
                );
                return(
                    <div>
                        {listItems}
                    </div>
                );
            }

        }
        return(<div></div>)
    }
}
const styles={
    Members:{
        textAlign: "center",
        width: '100%',
        borderBottom: '1px white solid',
        fontSize: 20,
        padding:10,
        backgroundColor: '#4E425E'
    }
}
export default ActivateMembers
