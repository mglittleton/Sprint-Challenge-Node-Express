// outside resources
const express = require("express");
const projectDB = require("../data/helpers/projectModel");

// custom files
const custMW = require("../middleware/functions");
const constants = require("../middleware/constants");

// local constants
const router = express.Router();

// global middleware

// route handlers for /projects
// // retreive
router.get("/", (req, res) => {
  projectDB
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json(constants.get500);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectDB
    .get(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json(constants.get500);
    });
});

router.get("/:id/actions", (req, res) => {
  const { id } = req.params;
  projectDB
    .getProjectActions(id)
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json(constants.get500);
    });
});

// // create
router.post("/", (req, res) => {
  const project = req.body;
  if (project.name && project.description) {
    projectDB
      .insert(project)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json(constants.post500);
      });
  } else {
    res.status(400).json(constants.projMissingInfo);
  }
});

// // delete
// 200 OK
// 404 ID not found
// 500 Oops

// // update
// 200 OK
// 400 Missing info
// 404 ID not found
// 500 Oops

// exports
module.exports = router;
