import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

import Create from './components/Create';
import Edit from './components/Edit';

const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('miusa-gxhmx');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('vendor');

client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
  db.collection('vendor-item').find().asArray()
).then(docs => {
    console.log("Found docs", docs);
    const html = docs.map(docs => `
    <div>${docs._id}</div>
    <div>${docs.owner_id}</div>
    <div>${docs.number}</div>`);
    document.getElementById("comments").innerHTML = html;
}).catch(err => {
    console.error(err)
});

client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
    console.log(`logged in anonymously as user ${user.id}`)
  });

// dummy data
const data = [
    { id: 1, name: "Item 1", url: 100, loc:"sf, ca" },
    { id: 2, name: "Item 2", url: 102 }
  ];
  const columns = [{
    dataField: 'id',
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
    dataField: 'cat',
    text: 'Category'
  }];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand"><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
          </Switch>

          <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        bootstrap4
      />
      
        </div><div id="comments">xx</div>
        
      </Router>
    );
  }
}

export default App;