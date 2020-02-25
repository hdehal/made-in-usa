import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { ObjectId } from 'bson'

// Modularized component imports
import { item } from './stitchAuth'
import { tableColumns } from './tableColumns'

class DisplayTable extends Component {

    // Initial state
    constructor(props){
        super(props);
        
        // this.props.handleOnSelectProp = this.handleOnSelect.bind(this)
        // this.onDelete = this.onDelete.bind(this);

        this.state = {
          data: [],
          selected: []
        }
      }
  
      getData(){
          // Find database documents
          item.find({})
          .toArray()
          .then(data => 
            data.map(x=>{ return { ...x, id: x._id.toString()}; })
          ).then(data => this.setState({data}))
  
          // Error logging
          .catch(err => {
            console.warn("Error:", err);
          });
      }
  
      async componentDidMount(){
        this.getData();
      }




      // Delete items in MongoDB Atlas
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

      // Define selectRow
      const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        selectColumnPosition: 'right',
        hideSelectAll: true,
        onSelect: this.props.handleOnSelectProp
      };

    return(
        <div>
          <BootstrapTable
            keyField="id"
            data={this.state.data}
            columns={tableColumns}
            selectRow={ selectRow }
            filter={ filterFactory() }
            striped
            hover
            condensed
            bootstrap4
          />
        </div>
    )
  }
}

export default DisplayTable;