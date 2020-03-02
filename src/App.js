import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Modularized component imports
import Home from './components/home';
import Add from './components/add';
import About from './components/about';
import Error from './components/error';
import Navigation from './components/navigation';
import DisplayTable from './components/displayTable';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selected: []
    }

    this.handleOnSelect = this.handleOnSelect.bind(this)
  }

    // Delete functionality setState
    handleOnSelect(row, isSelect){
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

  render() {

    return(

      <BrowserRouter basename="/st">

        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/add" component={() => <Add selected={this.state.selected} />} />
            <Route path="/about" component={About}/>
            <Route component={Error}/>
          </Switch>

          <DisplayTable handleOnSelectProp={this.handleOnSelect} />

      </BrowserRouter>
    )
  }
}

export default App;