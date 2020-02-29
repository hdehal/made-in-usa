import React, { Component } from 'react';
import AddForm from './addForm'
import Alerts from './alerts'

class Add extends Component {

constructor(props){
    super(props);

    this.state = {
      selected: []
    }
  }

  render() {

    return(
      <div>
        <Alerts setShow={this.props.setShowAlert} setHeadingAlert={this.props.setHeadingAlert} />
        <AddForm selected={this.props.selected} />
      </div>
    );
}
}
 
export default Add;