import React, { Component } from 'react';
import { ObjectId } from 'bson'

// Modularized component imports
import { item } from './stitchAuth'

class DeleteData extends Component {
  // Initial state
  constructor(props){
    super(props);

    this.onDelete = this.onDelete.bind(this);

    this.state = {
      selected: []
    }
  }

    // Delete items
    onDelete(e) {
    const query = {"_id": new ObjectId(this.state.selected)};

    item.deleteOne(query)
        .then(result => console.log(`Deleted ${result.deletedCount} item(s).`))
        .catch(err => console.error(`Delete failed with error: ${err}`))
        // getData after deleting item
        // this.getData();
    }

  render() {

    return(
        <div></div>
    )
  }
}

    // Delete functionality
    export const handleOnSelect = (row, isSelect) => {
        // If row selected setState
        if (isSelect) {
          console.log(row)
          this.setState({
            selected: row.id
          })
        // Otherwise clear the state
        } else {
          console.log(row)
          this.setState({
            selected: []
          })
        }
      }

export default DeleteData;