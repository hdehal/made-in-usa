import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'

class DisplayAlerts extends Component {

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
                <Alert.Heading>Missing a Vendor?</Alert.Heading>
                <p>Please feel free to contribute to the list by adding a "Made in USA" company. Your submission(s) will be put into a queue and approved by a moderator shortly. Thanks!</p>
            </Alert>
            </div>
        );
    }
}

export default DisplayAlerts;