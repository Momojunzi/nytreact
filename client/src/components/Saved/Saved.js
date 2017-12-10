import React from 'react';
import './Saved.css';

const Saved = (props) => {
  const savedArr = props.saved;
  const savedArticles = savedArr.map((article) => {
    return(
      <div className="row saved-row" key={article._id}>
        <a href={article.url} target="_blank" className="col-12 text-left"><h4 className="col-12 text-left">{article.headline}</h4></a>
        <button className="btn btn-sm btn-danger del-btn" data-id={article._id} onClick={props.deleteArticle}>Delete Article</button>
      </div>
    )
  })
  return (
    <div className="saved-container container">
      <h3 className="text-left saved-title col-12">Saved Articles</h3>
      {savedArticles}
    </div>
  )
}

export default Saved;
