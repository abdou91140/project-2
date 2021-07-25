const router = require("express").Router();
const memberModel = require("../../models/Member.model");

/* GET Register page */
router.get("/Register", (req, res, next) => {
  res.render("members/formRegister.hbs");
});
/* POST Register page */

router.post("/Register", (req, res) => {
  memberModel
    .create(req.body)
    .then((memberDoc) => {
      req.redirect("/member/" + memberDoc._id);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
