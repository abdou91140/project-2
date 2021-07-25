const router = require("express").Router();
const memberModel = require("../../models/Member.model");

/* GET member page */
router.get("/member/:id", (req, res, next) => {
  memberModel
    .findById(req.params.id)
    .then((memberDoc) => {
      res.render("members/memberDetails.hbs", { member: memberDoc });
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
