import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button'
import { ObjectId } from 'bson'

// Modularized imports
import { item } from './components/stitchAuth'
import {tableColumns} from './components/tableColumns'

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
      tags: [],
      selected: [0, 1]
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

    // Delete items
    onDelete(e) {
      const query = {"_id": new ObjectId(this.state.selected)};

    item.deleteOne(query)
      .then(result => console.log(`Deleted ${result.deletedCount} item(s).`))
      .catch(err => console.error(`Delete failed with error: ${err}`))
      // getData after deleting item
      this.getData();
    }

  render() {

// Delete functionality
const handleOnSelect = (row, isSelect) => {
  // If row selected setState
  if (isSelect) {
    this.setState({
      selected: row.id
    })
  // Otherwise clear the state
  } else {
    this.setState({
      selected: []
    })
  }
}

const selectRow = {
  mode: 'radio',
  clickToSelect: true,
  selectColumnPosition: 'right',
  hideSelectAll: true,
  onSelect: handleOnSelect
};

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
            columns={tableColumns}
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