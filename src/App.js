import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

// dummy JSON data
const data = [
  { company: "ABC", url: "www.google.com", loc:"sf, ca" },
  { company: "XYZ", url: "www.bing.com", loc:"oak, ca" }
];
const columns = [{
  dataField: 'company',
  text: 'Company'
}, {
  dataField: 'url',
  text: 'URL'
}, {
  dataField: 'loc',
  text: 'Location'
}];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: [
          { company: "ABC", url: "www.google.com", loc:"sf, ca" },
          { company: "XYZ", url: "www.bing.com", loc:"oak, ca" }
        ]
      })
    }, 1000)
  }

  async componentDidMount(){
    this.getData();
  }

  render() {
    return(
      <BootstrapTable
        keyField="id"
        data={this.state.data}
        columns={columns}
        striped
        hover
        condensed
        bootstrap4
      />
    )
  }
}

export default App;