const router = require("express").Router();
const articleController = require("../controllers/articlesController.js");
const axios = require("axios");

router.route("/saved")
  .get(articleController.findAll)
  .post(articleController.create)

router.route("/saved/:id")
  .delete(articleController.remove);

router.route("/search/:searchTerm/:startDate/:endDate")
  .get(articleController.search);

module.exports = router;
