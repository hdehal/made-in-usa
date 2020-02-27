import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Modularized component imports
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/navigation';
import AddForm from './components/addForm'
import DisplayTable from './components/displayTable'

class App extends Component {

  constructor(props){
    super(props);

    this.handleOnSelect = this.handleOnSelect.bind(this)

    this.state = {
      selected: []
    }
  }

    // Delete functionality setState
    handleOnSelect(row, isSelect){
      // If row selected setState
      if (isSelect) {
          // console.log(row)
          this.setState({
          selected: row.id
          })
      // Otherwise clear the state
      } else {
          // console.log(row)
          this.setState({
          selected: []
          })
      }
      }

  render() {

    return(
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>

          <DisplayTable handleOnSelectProp={this.handleOnSelect} />

          <AddForm selected={this.state.selected} />

      </BrowserRouter>
    )
  }
}

export default App;