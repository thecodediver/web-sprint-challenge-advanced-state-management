import React, { Component } from "react";
import "./App.css";
import TheSmurfs from './TheSmurfs'
import AddSmurf from './AddSmurf'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/index'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <AddSmurf />
        <TheSmurfs />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);
