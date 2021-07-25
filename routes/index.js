const MemberModel = require("../models/Member.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

// /* POST home page */
// router.get("/member/", (req, res, next) => {
//   console.log(req);
//   MemberModel.findById(req.body.id)
//     .then((memberDoc) => {
//       res.render("index.hbs", { member: memberDoc });
//     })
//     .catch((error) => console.log(error));

//   res.render("index.hbs");
// });

module.exports = router;
