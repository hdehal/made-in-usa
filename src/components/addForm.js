import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';

// Modularized component imports
import { item } from './stitchAuth'
import { ObjectId } from 'bson'

class AddForm extends Component {

  // Initial state
  constructor(props){
    super(props);

    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeLoc = this.onChangeLoc.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      id: [],
      data: [],
      selected: [],
      // States for checkboxes
      checkboxes: [{ id: "Accessories" }, { id: "Dresses" }, { id: "Pants" }, { id: "Shirts" }, { id: "Shoes" }, { id: "Suits" }, { id: "Swim" }, { id: "Undergarments" }],
      checkboxIds: [],
      // States below to prevent input elements from switching from uncontrolled to controlled 
      company: [],
      url: [],
      loc: [],
      gender: []
    }
  }

  // Delete items
  onDelete(e) {
    console.log(this.state.selected)
    const query = {"_id": new ObjectId(this.state.selected)};

    item.deleteOne(query)
        .then(result => console.log(`Deleted ${result.deletedCount} item(s).`))
        .catch(err => console.error(`Delete failed with error: ${err}`))
        // getData after deleting item
        // this.getData();
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

    // Checkboxes onChange
    checkboxOnChange = event => {
      const { name } = event.target;
      this.setState(prevState => {
        const { checkboxIds } = prevState;
        if (checkboxIds.includes(name)) {
          return { checkboxIds: checkboxIds.filter(id => id !== name) };
        } else {
          return { checkboxIds: [...checkboxIds, name].sort() };
        }
      });
    };

    onSubmit(e) {
        e.preventDefault();

        var newItem = { company: this.state.company, url: this.state.url, loc: this.state.loc, gender: this.state.gender, tags: this.state.checkboxIds }
        console.log(`The values are ${this.state.company}, ${this.state.url}, ${this.state.loc}, ${this.state.gender}, and ${this.state.checkboxIds}`)

        // Insert new item
        item.insertOne(newItem)
        .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
        .catch(err => console.error(`Failed to insert item: ${err}`))

        // Clear the forms
        this.setState({
        id: '',
        company: '',
        url: '',
        loc: '',
        gender: '',
        checkboxIds: []
        })

        // getData after insertOne new item
        // this.getData();
        }

  render() {

    // Define checkboxes state
    const { checkboxes, checkboxIds } = this.state;

    return(
        <div>
            <h4>Add New Company</h4>
            <form onSubmit={this.onSubmit}>
                <Form.Group>
                    <label>Company Name:</label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.company}
                        onChange={this.onChangeCompanyName}
                    />
                </Form.Group>
                <Form.Group>
                    <label>URL:</label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Location:</label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.loc}
                        onChange={this.onChangeLoc}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Gender:</label>
                    <select
                      className="form-control dropdown-toggle btn btn-secondary"
                      onChange={this.onChangeGender}
                      multiple={false}
                      >
                      <option value="">Select One</option>
                      <option value="Everyone">Everyone</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={2}>
                    Category/Tags:
                  </Form.Label>
                  <Col lg={2}>
                    {checkboxes.map(checkbox => (
                      <Form.Check
                        key={checkbox.id}
                        label={checkbox.id}
                        type="checkbox"
                        checked={checkboxIds.includes(checkbox.id)}
                        name={checkbox.id}
                        onChange={this.checkboxOnChange}
                      />
                    ))}
                  </Col>
                </Form.Group>

                <Form.Group>
                    <Button type="submit" value="Submit">Submit</Button>
                    <Button className="btn" variant="danger" onClick={this.onDelete}>Delete</Button>
                </Form.Group>
            </form>
        </div>
    )
  }
}


  
export default AddForm;