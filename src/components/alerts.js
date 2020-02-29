import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
        <div className="mainContainer">
        <Alert show={show} variant="success" onClick={() => setShow(false)} dismissible>
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
  
export default AlertDismissible;