import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

// Modularized component imports
import { item } from './stitchAuth';
import { tableColumns } from './tableColumns';

class DisplayTable extends Component {

    // Initial state
    constructor(props){
        super(props);

        this.state = {
          data: []
        }
      }
  
      // Find database documents
      async getData() {  
        (await item())
        .find({"isVerified":true})
          .toArray()
          .then(data => 
            data.map(x=>{ return { ...x, id: x._id.toString()}; })
          ).then(data => this.setState({data}))
  
          // Error logging
          .catch(err => {
            console.warn("Error:", err);
          });
      }
  
      componentDidMount(){
        this.getData();
      }

  render() {

      // Define selectRow
      /* const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        selectColumnPosition: 'right',
        hideSelectAll: true,
        onSelect: this.props.handleOnSelectProp
      }; */

      // Default sorting
      const defaultSorted = [{
        dataField: 'company',
        order: 'asc'
      }];

    return(
        <div>
          <BootstrapTable
            keyField="id"
            data={this.state.data}
            columns={tableColumns}
            // selectRow={ selectRow }
            filter={ filterFactory() }
            defaultSorted={ defaultSorted } 
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