import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

// connect to MongoDB Stitch
// Get the existing Stitch client
const stitchClient = Stitch.initializeDefaultAppClient("miusa-gxhmx");

// Get a client of the Remote Mongo Service for database access
const mongoClient = stitchClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')

// Retrieve a database object
const db = mongoClient.db('vendor')

// Retrieve the collection in the database
const vendorTable = db.collection('vendor-item')

// dummy JSON data
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

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
// Log in with anonymous credential
stitchClient.auth
.loginWithCredential(new AnonymousCredential())
.then((user) => {
    console.log(`Logged in as anonymous user with id: ${user.id}`)
})

// Find database documents
var self = this;
vendorTable.find({}, {limit: 12})
.toArray()
.then(data => 
//  console.log("yep", data)
    self.setState({data})
)
.catch(err => {
  console.warn("nope", err);
});



    }, 1000)
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