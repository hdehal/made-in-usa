import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

class Alerts extends Component {

constructor(props){
    super(props);

    this.onClickAlert = this.onClickAlert.bind(this);

    this.state = {
        setShowAlert: true
    }
  }

// Alerts onChange
onClickAlert(e) {
    this.setState({
        setShowAlert: false
});
}

  render() {

    return(
        <div className="mainContainer">
        <Alert show={this.state.setShowAlert} variant="success" onClick={this.onClickAlert} dismissible>
            <Alert.Heading>{this.state.setHeadingAlert}</Alert.Heading>
            <p>
            Test Message Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
            </p>
        </Alert>
        </div>
    );
    }
    }

export default Alerts;