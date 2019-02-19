import React, {Component} from 'react';
import {GetAllMembersAPI, DeleteMemberAPI, UpdateMembershipAPI} from '../services/api';
import ReactModal from 'react-modal';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Close from "@material-ui/icons/Close";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class AllMembers extends Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            currentObj: {},
        }
        this.getData = this.getData.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    handleOpenModal (obj) {
      this.setState({
          showModal: true,
          currentObj: obj,
       });

    }
    handleMembership(id, membership){
        UpdateMembershipAPI(id,membership);
        this.getData();
        this.handleCloseModal();

    }
    handleDelete(id){
        confirmAlert({
         title: 'Confirm to delete',
         message: 'Are you sure to do this.',
         buttons: [
           {
             label: 'Yes',
             onClick: () => {
                 DeleteMemberAPI(id);
                 this.getData();
                 this.handleCloseModal();
             }
           },
           {
             label: 'No',
             onClick: () => alert('Click No')
           }
         ]
       })
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }
    getData(){
        GetAllMembersAPI().then(function(r){
            console.log(r.data);
            this.data = r.data;
        }.bind(this));
    }
    render(){
        return(
            <div>
              <ReactTable
                data={this.data}
                columns={[
                  {
                    Header: "Medlemmar",
                    columns: [
                        {
                            Header: 'ID',
                            accessor: 'id'
                        },
                        {
                            Header: "Förnamn",
                            accessor: "FirstName"
                        },
                        {
                            Header: "Efternamn",
                            accessor: "LastName"
                        },
                        {
                            Header: "E-mail",
                            accessor: "Email"
                        },
                        {
                            Header: "Medlemskap",
                            accessor: "Membership"
                        },
                        {
                            Header: "Kår",
                            accessor: "karMedlemskap"
                        },
                        {
                            Header: "Personnummer",
                            accessor: "Personnummer"
                        },
                        {
                            Header: "Adress",
                            accessor: "Adress"
                        },
                        {
                            Header: "Postnummer",
                            accessor: "Postnummer"
                        },
                        {
                            Header: "Stad",
                            accessor: "Stad"
                        },
                        {
                            Header: "Kön",
                            accessor: "Kon"
                        },
                        {
                            Header: "Telefonnummer",
                            accessor: "Telefonnummer"
                        },
                        {
                            Header: "Registreringsdatum",
                            accessor: "reg_date"
                        },

                    ]
                  }]}
                defaultPageSize={20}
                className="-striped -highlight"
                getTrProps={(state, rowInfo, column, instance) => ({
                            onClick: e => this.handleOpenModal(rowInfo.original),//DeleteMemberAPI(rowInfo.original.id),
                        })}
              />
              <ReactModal
                    isOpen={this.state.showModal}
              >
                <button onClick={this.handleCloseModal}><Close/></button>
                <h1 style={styles.Name}>{this.state.currentObj.FirstName + " " + this.state.currentObj.LastName}</h1>
                <button onClick={() =>this.handleDelete(this.state.currentObj.id)}>Ta bort användaren</button>
                <br />
                <button onClick={() => this.handleMembership(this.state.currentObj.id, 'gold')}>Gör till Guld</button>
                <br />
                <button onClick={() => this.handleMembership(this.state.currentObj.id, 'boardmember')}>Gör till Boardmember</button>

              </ReactModal>
            </div>
        );
    }
}
const styles = {
    Name:{
        color: "black",
    }
}

export default AllMembers;
