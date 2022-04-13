const yelp = require('yelp-fusion');
const apiKey = 's8YUtRkCvb39Sa16mWnFYMKzC1tPkJSlsmdVKzd_k1-4WdJkQ0X0b_jDrQ0qwAKGcEHtM-Dz7jJw6LZ9z9IXeveNNMYyGLPzQnXIBFww9tFajCyK4oECoLaBqhBXYnYx'
const client = yelp.client(apiKey);


// Define hoursController object for export 
const hoursController = {

  // storeHours middleware takes an array of restaurants from res.locals and places today's open hours for each restaurant in the array
  async storeHours(req, res, next) {
    try {
      const restaurants = res.locals.restaurants

      // Store today's date under day
      const now = new Date()
      const day = now.getDay()

      // Collect hours of operation for today on each specific business and store it on the business object at property "hours"
        // business query will return an object with a jsonBody, in which hours are stored
      for (let i = 0; i < restaurants.length; i++) {
        const businessHours = await client.business(restaurants[i].alias);
        // console.log(businessHours.jsonBody)
        let hoursArray = [];
        const openHoursToday = [];

        // Check if businesses lists hours, say "not listed" if not
        if (businessHours.jsonBody.hours){
          hoursArray = businessHours.jsonBody.hours[0].open
        }
        else {hoursArray = [{start: 'not listed', end: 'not listed', day}];}
        
        // Iterate through hoursArray, pushing any hours today into the openHoursToday array (i.e. if a businesses has a lunch break)
        hoursArray.forEach(element=>{
          if (element.day === day){openHoursToday.push(element)}
        })

        restaurants[i].hours = openHoursToday;
      }
      
      // Store business array (now containing hours) on res.locals and move on to next middleware
      res.locals.restaurants = restaurants;
      return next()
    }
    
    // ------------------ Error handling ------------------------
    catch (error) {
      console.log(error);
      return next({
        log: `Error caught in hoursController.storeRest middleware ${error}`,
        message: {
          error: 'hoursController.storeRest ERROR: Check server logs for details',
        },
      });
    } 
  }
}

module.exports = hoursController;