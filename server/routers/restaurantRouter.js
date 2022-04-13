const express = require('express');
const restaurantController = require('../controllers/restaurantController.js')
const hoursController = require('../controllers/hoursController.js')

const router = express.Router();

// GET request
  // Sends restaurant list (in array) pulled from Yelp API via apiController back out to client 
router.get('/', restaurantController.storeRest, hoursController.storeHours, (req, res) => {
  return res.status(201).send(res.locals.restaurants);
});

module.exports = router;
