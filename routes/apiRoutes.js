const router = require("express").Router();
const articleController = require("../controllers/articlesController.js")

router.route("/saved")
  .get(articleController.findAll)
  .post(articleController.create)

router.route("/saved/:id")
  .delete(articleController.remove);

module.exports = router;
