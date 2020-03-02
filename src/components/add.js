import React, { Component } from 'react';
import AddForm from './addForm';
import DisplayAlerts from './displayAlerts';

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
        <DisplayAlerts />
        <AddForm selected={this.props.selected} />
      </div>
    );
}
}
 
export default Add;