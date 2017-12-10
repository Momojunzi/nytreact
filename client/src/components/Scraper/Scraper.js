import React from 'react';

const Scraper = (props) => {
  return (
    <div className="row ">
      <div className="col-10">
        <h3>Click the button to find articles from the New York Times</h3>
      </div>
      <div>
        <button className='btn btn-lg' onClick={props.scrape}>Scrape the NYT!</button>
      </div>
    </div>
  )
}

export default Scraper
