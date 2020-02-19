import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';
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
      // States for checkboxes
      isAccessories: false,
      isDresses: false,
      isPants: false,
      isShirts: false,
      isShoes: false,
      isSuits: false,
      isSwim: false,
      isUndergarments: false,
      // States below to prevent input elements from switching from uncontrolled to controlled 
      company: [],
      url: [],
      loc: [],
      gender: [],
      tags: [],
      selected: [0, 1]
    }
  }

  // Form fields onChange
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

    // Checkboxes onChange
    onChangeAccessories = () => {
      this.setState(initialState => ({
        isAccessories: !initialState.isAccessories,
      }));
    }
    onChangeDresses = () => {
    this.setState(initialState => ({
        isDresses: !initialState.isDresses,
      }));
    }
    onChangePants = () => {
    this.setState(initialState => ({
        isPants: !initialState.isPants,
      }));
    }
    onChangeShirts = () => {
    this.setState(initialState => ({
        isShirts: !initialState.isShirts,
      }));
    }
    onChangeShoes = () => {
    this.setState(initialState => ({
        isShoes: !initialState.isShoes,
      }));
    }
    onChangeSuits = () => {
    this.setState(initialState => ({
        isSuits: !initialState.isSuits,
      }));
    }
    onChangeSwim = () => {
    this.setState(initialState => ({
        isSwim: !initialState.isSwim,
      }));
    }
    onChangeUndergarments = () => {
    this.setState(initialState => ({
        isUndergarments: !initialState.isUndergarments,
      }));
    }
  
    onSubmit(e) {
      e.preventDefault();

      // Checkboxes convert value of a checkbox to string
      let checkArray = [];
      for (var key in this.state) {
        if (this.state[key] === true) {
          checkArray.push(key);
        }
      }
  
      let checkData = {
        checkbox: checkArray.toString()
      };
  

      var newItem = { company: this.state.company, url: this.state.url, loc: this.state.loc, gender: this.state.gender, tags: this.state.checkData }
      console.log(`The values are ${this.state.company}, ${this.state.url}, ${this.state.loc}, ${this.state.gender}, and ${this.state.checkData}`)

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
                    <label>Company Name:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.company}
                        onChange={this.onChangeCompanyName}
                    />
                </div>
                <div className="form-group">
                    <label>URL:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.loc}
                        onChange={this.onChangeLoc}
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
                    />
                </div>
                {/*
                <div className="form-group">
                    <label>Category/Tags:</label>
                    <label>Test
                    <input 
                        type="checkbox" 
                        className="form-control"
                        value={this.state.tags}
                        onChange={this.onChangeTags}
                    /></label>
                </div>
                */}

<fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Category/Tags:
      </Form.Label>
      <Col lg={2}>
        <Form.Check
          type="checkbox"
          label="Accessories"
          checked={this.state.Accessories}
          onChange={this.onChangeAccessories}
        />
        <Form.Check
          type="checkbox"
          label="Dresses"
          checked={this.state.isDresses}
          onChange={this.onChangeDresses}
        />
        <Form.Check
          type="checkbox"
          label="Pants"
          checked={this.state.isPants}
          onChange={this.onChangePants}
        />
        <Form.Check
          type="checkbox"
          label="Shirts"
          checked={this.state.isShirts}
          onChange={this.onChangeShirts}
        />
        <Form.Check
          type="checkbox"
          label="Shoes"
          checked={this.state.isShoes}
          onChange={this.onChangeShoes}
        />
        <Form.Check
          type="checkbox"
          label="Suits"
          checked={this.state.isSuits}
          onChange={this.onChangeSuits}
        />
        <Form.Check
          type="checkbox"
          label="Swim"
          checked={this.state.isSwim}
          onChange={this.onChangeSwim}
        />
        <Form.Check
          type="checkbox"
          label="Undergarments"
          checked={this.state.isUndergarments}
          onChange={this.onChangeUndergarments}
        />
      </Col>
    </Form.Group>
  </fieldset>



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