const yelp = require('yelp-fusion');
const apiKey =
  's8YUtRkCvb39Sa16mWnFYMKzC1tPkJSlsmdVKzd_k1-4WdJkQ0X0b_jDrQ0qwAKGcEHtM-Dz7jJw6LZ9z9IXeveNNMYyGLPzQnXIBFww9tFajCyK4oECoLaBqhBXYnYx';
const client = yelp.client(apiKey);

// Define restaurantController object for export
const restaurantController = {
  // storeRest middleware takes a request query and returns an array of restaurants pulled from the Yelp API based on the location and term of the query
  async storeRest(req, res, next) {
    // Destructure term and location from request query to send to Yelp API
    const { term, location } = req.query;

    try {
      // Define object for searching via Yelp API
      // See https://www.yelp.com/developers/documentation/v3/business_search for search parameter options
      const obj = {
        term: term,
        location: location,
        limit: 10,
        sort_by: 'best_match',
        categories: 'restaurants',
      };

      // Store response from Yelp API as response
      const response = await client.search(obj);

      // Response has property "jsonBody" which is formated as below
      // jsonBody: {
      //   businesses: [**array of businesses matching the search**],
      //   total: **integer- Total number of business Yelp finds based on the search criteria**,
      //   region: { suggested area in a map to display results in }
      // }

      const businesses = response.jsonBody.businesses;

      // Store business array on res.locals and move on to next middleware
      res.locals.restaurants = businesses;
      return next();
    } catch (error) {
      // ------------------ Error handling ------------------------
      // console.log(error);
      return next({
        log: `Error caught in restaurantController.storeRest middleware ${error}`,
        message: {
          error:
            'restaurantController.storeRest ERROR: Check server logs for details',
        },
      });
    }
  },
};

module.exports = restaurantController;
