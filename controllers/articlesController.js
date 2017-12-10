const db = require("../models");
const request = require('request');


module.exports = {
  findAll: function(req, res) {
    db.Article
      .find({})
      .then(dbArticles => res.json(dbArticles))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbArticle => res.json(dbAticle))
      .catch(err => res.json(err));
  },

  findById: function(req, res) {
    db.Article
      .fincById(req.params.id)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Article
      .findOneAndRemove({_id: req.params.id})
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.json(err));
  },

  search: function(req, res) {
    const searchTerm = req.params.searchTerm;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    //console.log(searchTerm, startDate, endDate);
    const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
    const searchString = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${searchTerm}&begin_date=${startDate}&end_date=${endDate}`;
    request
      .get(searchString, (err, response, body)=>{
        //console.log(body);
        res.json(body);
      })

  }
};
