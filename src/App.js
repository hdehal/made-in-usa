import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button'
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
const item = mongoClient.db("vendor").collection("vendor-item");

// Define sortCaret
const sortFunc = (order, column) => {
  if (!order) return (<span className="order"><span className="dropdown"><span className="caret"></span></span><span className="dropup"><span className="caret"></span></span></span>);
  else if (order === 'asc') return (<span className="react-bootstrap-table-sort-order"><span className="caret"></span></span>);
  else if (order === 'desc') return (<span className="react-bootstrap-table-sort-order dropup"><span className="caret"></span></span>);
  return null;
}

// Delete functionality
const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  onSelect: (row, isSelect, rowIndex, e) => {
    console.log(row.id);
  },
  onSelectAll: (isSelect, rows, e) => {
    console.log(rows.id);
  }
};
const query = {};

// JSON table column data
const columns = [
  {
    dataField: 'id',
    text: 'ID',
    hidden: true
    
  }, {
    dataField: 'company',
    text: 'Company',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'url',
    text: 'URL',
    sort: true,
    sortCaret: sortFunc,
    formatter: (rowContent, row) => {
      return <><a href={rowContent} target="_blank" rel="noopener noreferrer">{rowContent}</a></>;
    }
}, {
    dataField: 'loc',
    text: 'Location',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'gender',
    text: 'Gender',
    sort: true,
    sortCaret: sortFunc
}, {
    dataField: 'tags',
    text: 'Tags',
    sort: true
}];

class App extends Component {

  // Initial state
  constructor(props){
    super(props);

    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeLoc = this.onChangeLoc.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      id: [],
      data: [],
      // States below to prevent input elements from switching from uncontrolled to controlled 
      company: [],
      url: [],
      loc: [],
      gender: [],
      tags: []
    }
  }

  onChangeCompanyName(e) {
    this.setState({
        company: e.target.value
    });
    }
    onChangeUrl(e) {
    this.setState({
        url: e.target.value
    });
    }
    onChangeLoc(e) {
      this.setState({
        loc: e.target.value
    });
    }
    onChangeGender(e) {
      this.setState({
        gender: e.target.value
    });
    }
    onChangeTags(e) {
      this.setState({
        tags: e.target.value
    });
    }
  
    onSubmit(e) {
      e.preventDefault();
      // console.log(`The values are ${this.state.company}, ${this.state.url}, ${this.state.loc}, ${this.state.gender}, and ${this.state.tags}`)

      var newItem = { company: this.state.company, url: this.state.url, loc: this.state.loc, gender: this.state.gender, tags: this.state.tags }

      // Insert new item
      item.insertOne(newItem)
      .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
      .catch(err => console.error(`Failed to insert item: ${err}`))

      this.setState({
        id: '',
        company: '',
        url: '',
        loc: '',
        gender: '',
        tags: ''
      })

      // getData after insertOne new item
      this.getData();
        e.preventDefault();
      }

      // Delete items
      onDelete(e) {
        item.deleteMany(query)
          .then(result => console.log(`Deleted ${result.deletedCount} item(s).`))
          .catch(err => console.error(`Delete failed with error: ${err}`))
      }

  getData(){
      // Find database documents
      item.find({})
      .toArray()
      .then(data => 
        data.map(x=>{ return { ...x, id: x._id.toString()}; })
      ).then(data => this.setState({data}))

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
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand"><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          </Switch>

          <BootstrapTable
            keyField="id"
            data={this.state.data}
            columns={columns}
            selectRow={ selectRow }
            striped
            hover
            condensed
            bootstrap4
          />

          <div>
            <h3>Add New Company</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Company Name:  </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.company}
                        onChange={this.onChangeCompanyName}
                    />
                </div>
                <div className="form-group">
                    <label>URL: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                </div>
                <div className="form-group">
                    <label>Location: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.loc}
                        onChange={this.onChangeLoc}
                    />
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
                    />
                </div>
                <div className="form-group">
                    <label>Category/Tags: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.tags}
                        onChange={this.onChangeTags}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                    <Button className="btn" variant="danger" onClick={this.onDelete}>Delete</Button>
                </div>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;