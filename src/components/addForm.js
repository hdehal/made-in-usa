import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import { ObjectId } from 'bson';
import Recaptcha from 'react-recaptcha';

// Modularized component imports
import { itemModify } from './stitchAuth';

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
    this.onChangeisVerified = this.onChangeisVerified.bind(this);

    this.onloadCallback = this.onloadCallback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      // States for checkboxes
      checkboxes: [{ id: "Accessories" }, { id: "Bottoms" }, { id: "Dresses" }, { id: "Formal" }, { id: "Shoes" }, { id: "Swim" }, { id: "Tops" }, { id: "Undergarments" }],
      checkboxIds: [],
      // States below to prevent input elements from switching from uncontrolled to controlled 
      company: '',
      url: '',
      loc: '',
      gender: '',
      isCaptchaVerified: false,
      isVerified: false,
      animateSubmit: false
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
    onChangeisVerified(e) {
      this.setState({
        isVerified: e.target.checked
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

        var newItem = { company: this.state.company, url: this.state.url, loc: this.state.loc, gender: this.state.gender, tags: this.state.checkboxIds, isVerified: this.state.isVerified }
        // console.log(`The values are ${this.state.company}, ${this.state.url}, ${this.state.loc}, ${this.state.gender}, ${this.state.checkboxIds}, ${this.state.isVerified}`)

        // Insert new item
        itemModify.insertOne(newItem)
        .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
        .catch(err => console.error(`Failed to insert item: ${err}`))

        // Reset and clear the forms
        this.setState({
          id: '',
          company: '',
          url: '',
          loc: '',
          gender: '',
          checkboxIds: [],
          isCaptchaVerified: false,
          isVerified: false
        })

        // Reset the select option to the default null value or index
        document.getElementById("genderSelect").selectedIndex = "0";

        // getData after insertOne new item
        // this.getData();
        }

        // Delete items in MongoDB Atlas
        onDelete(e) {
          console.log(this.props.selected)
          const query = {"_id": new ObjectId(this.props.selected)};

          itemModify.deleteOne(query)
            .then(result => console.log(`Deleted ${result.deletedCount} item(s).`))
            .catch(err => console.error(`Delete failed with error: ${err}`))
            // getData after deleting item
            // this.getData();
          }

          onloadCallback() {
            // console.log("Captcha loaded!");
          }

          // Recaptcha verification response
          verifyCallback(response) {
            if(response) {
              this.setState({
                isCaptchaVerified: true
              })
            }
          }

          // Animate submit button onClick
          animateSubmit = () => {
            this.setState({ 
                animateSubmit: true 
            });
            setTimeout(()=>{
              this.setState({animateSubmit: false});
            }, 2000)
          }

  render() {

    // Define checkboxes state
    const { checkboxes, checkboxIds } = this.state;

    // Define animateSubmit state
    const { animateSubmit } = this.state;

    // Recaptcha reset function
    let recaptchaInstance;
    const resetRecaptcha = () => {
      recaptchaInstance.reset();
      this.setState({
        isCaptchaVerified: false
      })
    };

    return(
        <div className="mainContainer">
            <h4>Add New Company</h4>
            <form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Company Name:</Form.Label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.company}
                        onChange={this.onChangeCompanyName}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>URL:</Form.Label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location:</Form.Label>
                    <Form.Control 
                        type="text"
                        size="sm"
                        value={this.state.loc}
                        onChange={this.onChangeLoc}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender:</Form.Label>
                    <select
                      required
                      id="genderSelect"
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

                <Form.Group>
                  <Form.Label>
                    Category/Tags:
                  </Form.Label>
                  <div className="mb-3">
                    {checkboxes.map(checkbox => (
                      <Form.Check inline
                        key={checkbox.id}
                        label={checkbox.id}
                        id={checkbox.id}
                        type="checkbox"
                        checked={checkboxIds.includes(checkbox.id)}
                        name={checkbox.id}
                        onChange={this.checkboxOnChange}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Check
                    type="hidden"
                    disabled
                  />

                <Recaptcha
                  sitekey="6LdaT90UAAAAAPhUh2D2odXQQB47ilnXw2mhCwAj"
                  render="explicit"
                  onloadCallback={this.onloadCallback}
                  verifyCallback={this.verifyCallback}
                  ref={e => recaptchaInstance = e}
                />

                <Form.Group>

                    <Button id="addFormSubmit" type="submit" value="Submit" disabled={!this.state.isCaptchaVerified} 
                    onClick={() => {
                      this.animateSubmit();
                      resetRecaptcha()
                   }}>
                     { animateSubmit && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" style={{ marginRight: "4px" }} /> }
                     { animateSubmit && <span>Submitting</span> }
                     { !animateSubmit && <span>Submit</span> }
                     </Button>
                    {/* <Button className="btn" variant="danger" onClick={this.onDelete}>Delete</Button> */}
                    <Button className="btn" variant="danger" type="reset"
                    onClick={() => {
                      resetRecaptcha()
                   }}>Reset</Button>
                </Form.Group>

            </form>
        </div>
    )
  }
}


  
export default AddForm;