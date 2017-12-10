import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search.js';
import API from './util/API.js';
import axios from 'axios';
import Articles from './components/Articles/Articles.js';

class App extends Component {
  state = {
    searchTerm: "",
    startDate: "",
    endDate: "",
    articles: []
  }

  inputChangeHandler = (event) =>{
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  searchButtonHandler = () => {
    const {searchTerm, startDate, endDate} = this.state;
    const formattedSearch = searchTerm.replace(" ", "%20");
    this.search(formattedSearch, startDate, endDate);
  }

  search = (searchTerm, startDate, endDate) => {
    const articles = [];
    axios.get(`/api/search/${searchTerm}/${startDate}/${endDate}`)
      .then((response)=>{
        const data = JSON.parse(response.data);
        data.response.docs.forEach((doc)=>{
          const article = {};
          article.url = doc.web_url;
          article.headline = doc.headline.main;
          article.date = doc.pub_date;
          articles.push(article);
        })
        this.setState({articles: articles});
        console.log(this.state.articles);
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>New York Times Search</h1>
        </header>
        <Search change={this.inputChangeHandler} search={this.searchButtonHandler}/>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
