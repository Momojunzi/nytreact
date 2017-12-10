import React from 'react';

const Search = (props) => {
  return(

    <div>
      <div className="container col-10 ">
        <div className="row col-10">
          <h4 className="text-left">Subject</h4>
          <input className="col-10" name="searchTerm" id="subject" onChange={props.change}/>
        </div>
        <div className="row col-10">
        <h4 className="text-left">Start Date</h4>
          <input className="col-10" name="startDate" id="startYear" onChange={props.change} />
        </div>
        <div className="row col-10">
        <h4 className="text-left">End Date</h4>
          <input className="col-10" name="endDate" id="endYear" onChange={props.change}/>
        </div>
        <div className="row col-12">
          <button className="btn btn-success btn-lg" id="searchButton" onClick={props.search}>search</button>
        </div>
      </div>
    </div>

  )
}

export default Search;
