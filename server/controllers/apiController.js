// const apiSearch = require('../api');
const express = require('express');
// *** v v yelp api thingy 
('use strict');

// research yelp api
const yelp = require('yelp-fusion');
const client = yelp.client(
  'xKtPwI4Rj7xRNlLYekgqpwlRmgtq0dUxBeYWDsbCTQhqUnqFSRluOURoDbvvXQ3G9kLWR7c3rmmNB92Ofr8cBgpy5mk4U2WdQIKWINQFGyXWG7anfSLSenMmWEFUYnYx'
);
const Scraper = require('../scraper.js');

const apiController = {
  async storeRest(req, res, next) {

    const { term, location } = req.query;
    try {
      const obj = {
        term: term,
      // *** can we possibly do zipcode?
        location: location,
        limit: 10,
        sort_by: 'best_match',
        categories: 'restaurants',
      };
      const response = await client.search(obj)
      // *** check API for yelp - possibly bringing the jsonBody method in
      const businesses = response.jsonBody.businesses;
      const now = new Date()
      const day = now.getDay()
      // console.log(businesses.length)

      for (let i = 0; i < businesses.length; i++) {
        const respo = await client.business(businesses[i].alias);
        businesses[i].hours = respo.jsonBody.hours[0].open[day];
        // console.log("calling:", i)
        // const photos = await Scraper.scrapePhotos(businesses[i].alias);
        // businesses[i].photos = photos;
      }
      res.locals.restaurants = businesses;
      // console.log(res.locals.restaurants);
      return next()
    
      }
      catch (error) {
        console.log(error);
      return next({
        log: `Error caught in apiController.storeRest middleware ${error}`,
        message: {
          error: 'apiController.storeRest ERROR: Check server logs for details',
        },
      });
    }
  },
};

// export default apiController;
module.exports = apiController;
