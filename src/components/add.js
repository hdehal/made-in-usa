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
        <div>
            <AddForm selected={this.props.xProp} />
        </div>
    );
}
}
 
export default Add;