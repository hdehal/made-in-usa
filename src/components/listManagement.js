import React, { Component } from 'react';
import { item } from './stitchAuth'
import { ObjectId } from 'bson'

class ListManagement extends Component {
  
    constructor(props){
        super(props);

//
        this.state = {
        selected: []
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

  render() {
    return (
        <div></div>
    );
  }
}

export default ListManagement;