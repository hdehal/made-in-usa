import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

// Modularized component imports
import { item } from './stitchAuth'
import { tableColumns } from './tableColumns'

class DisplayTable extends Component {

    // Initial state
    constructor(props){
        super(props);
  
        this.state = {
          data: []
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

  render() {

    // Delete functionality
    const handleOnSelect = (row, isSelect) => {
        // If row selected setState
        if (isSelect) {
          this.setState({
            selected: row.id
          })
        // Otherwise clear the state
        } else {
          this.setState({
            selected: []
          })
        }
      }
  
      // Define selectRow
      const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        selectColumnPosition: 'right',
        hideSelectAll: true,
        onSelect: handleOnSelect
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