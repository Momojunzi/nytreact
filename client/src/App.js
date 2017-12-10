import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search.js';
import axios from 'axios';
import Articles from './components/Articles/Articles.js';
import Saved from './components/Saved/Saved.js';

class App extends Component {
  state = {
    searchTerm: "",
    startDate: "",
    endDate: "",
    articles: [],
    savedArticles: []
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
        //console.log(this.state.articles);
      });
  }

  save = (event) => {
    const articleIndex = event.target.getAttribute("data-id");
    const article = this.state.articles[articleIndex];
    //console.log(articleIndex, article);
    axios.post('api/saved', article)
      .then(response =>{
        console.log(response);
        this.loadSavedArticles();
      });
  }

  loadSavedArticles = () => {
    axios.get('/api/saved')
      .then(response => {
        console.log(response);
        const savedArticles = [];
        response.data.forEach((article) => {
          savedArticles.push(article);
        })
        this.setState({savedArticles: savedArticles});
        console.log(this.state.savedArticles);
      });
  }

  componentDidMount() {
    this.loadSavedArticles();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>New York Times Search</h1>
        </header>
        <Search change={this.inputChangeHandler} search={this.searchButtonHandler}/>
        <Articles articles={this.state.articles} save={this.save}/>
        <Saved saved={this.state.savedArticles}/>
      </div>
    );
  }
}

export default App;
