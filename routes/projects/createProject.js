const projectModel = require("../../models/Project.model");

const router = require("express").Router();

//GET create the project
router.get("/create-project", (req, res, next) => {
  projectModel
    .create(re)
    .then((projectDocument) => {
      res.render("projects/formProject.hbs", { project: projectDocument });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
