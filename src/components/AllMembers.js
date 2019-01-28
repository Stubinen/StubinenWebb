import React, {Component} from 'react';
import {GetAllMembersAPI, DeleteMemberAPI} from '../services/api';
import ReactModal from 'react-modal';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Close from "@material-ui/icons/Close";

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
    handleDelete(id){
        DeleteMemberAPI(id);
        this.handleCloseModal();
        this.getData();
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
