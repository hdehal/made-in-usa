import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

// dummy data
const data = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 }
];
const columns = [{
  dataField: 'id',
  text: 'Company'
}, {
  dataField: 'url',
  text: 'URL'
}, {
  dataField: 'loc',
  text: 'Location'
}, {
  dataField: 'gender',
  text: 'Gender'
}, {
  dataField: 'cat',
  text: 'Category'
}];

const ProductTable = () => {
  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      striped
      hover
      condensed
      bootstrap4
    />
  );
};

export default ProductTable;