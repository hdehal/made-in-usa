import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

// Define MongoDB Stitch App ID
const APP_ID = "miusa-gxhmx";

// Initialize MongoDB Stitch
const app = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID);

// Define client/factory
  const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );  

// Define db and collection
  const items = mongoClient.db("vendor").collection("vendor-item");

// JSON table column data
const columns = [{
  dataField: 'company',
  text: 'Company'
}, {
  dataField: 'url',
  text: 'URL'
}, {
  dataField: 'loc',
  text: 'Location'
}, {
  dataField: 'gender',
  text: 'Gender'
}, {
  dataField: 'tags',
  text: 'Tags'
}];

class App extends Component {

  // Initial state
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getData(){

      // Find database documents
      items.find({})
      .toArray()
      .then(data => 
        this.setState({data})
      )

      // Error logging
      .catch(err => {
        console.warn("Error:", err);
      });
  }

  async componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <BootstrapTable
        keyField="id"
        data={this.state.data}
        columns={columns}
        striped
        hover
        condensed
        bootstrap4
      />
    )
  }
}

export default App;