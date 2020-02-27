import React, { Component } from 'react';
import AddForm from './addForm'

class Add extends Component {

constructor(props){
    super(props);

    this.state = {
      selected: []
    }
  }

  render() {

    return(
      <AddForm selected={this.props.selected} />
    );
}
}
 
export default Add;