import React from 'react';
import './Search.css';

const Search = (props) => {
  return(

    <div className="container search-container">
      <h3 className="text-left search-title col-12">Search</h3>
      <div className="row justify-content-center">
        <div className="row col-10 justify-content-center search-row">
          <h4 className="text-left col-10">Subject</h4>
          <input className="col-10" name="searchTerm" id="subject" onChange={props.change} placeholder="enter a subject"/>
        </div>
        <div className="row col-10 justify-content-center search-row">
          <h4 className="text-left col-10">Start Date</h4>
          <input className="col-10 " name="startDate" id="startYear" onChange={props.change} placeholder="enter a date formatted ad YYYMMDD"/>
        </div>
        <div className="row col-10 justify-content-center search-row">
          <h4 className="text-left col-10">End Date</h4>
          <input className="col-10" name="endDate" id="endYear" onChange={props.change} placeholder="enter a date formatted ad YYYMMDD"/>
        </div>
        <div className="row col-12 justify-content-center search-row">
          <button className="btn btn-success btn-lg search-btn" id="searchButton" onClick={props.search}>search</button>
        </div>
      </div>
    </div>

  )
}

export default Search;
