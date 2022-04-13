const express = require('express');
const apiController = require('../controllers/apiController.js')
const router = express.Router();

// GET request
  // Sends restaurant list (in array) pulled from Yelp API via apiController back out to client 
router.get('/', apiController.storeRest, (req, res) => {
  return res.status(201).send(res.locals.restaurants);
});

module.exports = router;
