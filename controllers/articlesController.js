const db = require("../models");

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
      .then(dbAticle => res.json(dbAticle))
      .catch(err => res.status(422).json(err));
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
      .catch(err => res.status(422).json(err));
  }
};
