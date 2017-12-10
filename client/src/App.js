import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search.js';
import API from './util/API.js';

class App extends Component {
  state = {
    searchTerm: "",
    startDate: "",
    endDate: ""
  }

  inputChangeHandler = (event) =>{
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  searchButtonHandler = () => {
    const {searchTerm, startDate, endDate} = this.state;
    console.log(this.state);
    API.search(searchTerm, startDate, endDate);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>New York Times Search</h1>
        </header>
        <Search change={this.inputChangeHandler} search={this.searchButtonHandler}/>
      </div>
    );
  }
}

export default App;
