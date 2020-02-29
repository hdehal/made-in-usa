import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

class Alerts extends Component {

constructor(props){
    super(props);

    this.onClickAlert = this.onClickAlert.bind(this);

    this.state = {
        setShow: true
    }
  }

// Alerts onChange
onClickAlert(e) {
    this.setState({
        setShow: false
});
}

  render() {

    return(
        <div className="mainContainer">
        <Alert show={this.state.setShow} variant="success" onClick={this.onClickAlert} dismissible>
            <Alert.Heading>Test Heading</Alert.Heading>
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