// outside resources
const express = require("express");
const actionDB = require("../data/helpers/actionModel");

// custom files
const custMW = require("../middleware/functions");
const constants = require("../middleware/constants");

// local constants
const router = express.Router();

// global middleware

// route handlers for /actions
// // retreive
router.get("/", (req, res) => {
  actionDB
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json(constants.get500);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  actionDB
    .get(id)
    .then(action => {
      res.json(action);
    })
    .catch(err => {
      res.status(500).json(constants.get500);
    });
});

// // create
router.post("/", (req, res) => {
  const action = req.body;
  if (action.notes && action.project_id && action.description) {
    actionDB
      .insert(action)
      .then(action => {
        res.json(action);
      })
      .catch(err => {
        res.status(500).json(constants.post500);
      });
  } else {
    res.status(400).json(constants.actMissingInfo);
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
