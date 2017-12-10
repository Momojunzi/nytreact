import React from 'react';
import './Articles.css';

const Articles = (props) => {
  const articlesArr = props.articles;
  const articles = articlesArr.map((article) => {
    return(
      <div className="row article-row">
        <h4 className="col-12 text-left">{article.headline}</h4>
        <p className="col-12 text-left">created on {article.date}</p>
        <a href={article.url} target="blank" className="col-12 text-left"><p>{article.url}</p></a>
      </div>
    )
  })

  return(
    <div className="container articles-container">
      <h3 className="text-left article-title col-12">Articles</h3>

      {articles}
    </div>
  )
}

export default Articles;
