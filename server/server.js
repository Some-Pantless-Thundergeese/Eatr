// ----------------------------------- Server setup -----------------------------------
const express = require('express');
const path = require('path');
const app = express();
// Parse request body
app.use(express.json());
// Parse request URL
app.use(express.urlencoded({ extended: true }));
// Serve webpack build from dist
app.use(express.static(path.resolve(__dirname, '../dist')));


// ------------------------------------ Require routers ------------------------------------------
const restaurantRouter = require('./routers/restaurantRouter')


// ------------------------------------ ROUTE HANDLERS --------------------------------------------

// Serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Route '/restaurants' through restaurantsRouter
app.use('/restaurants', restaurantRouter)


// -------------------------------------- Error handlers ----------------------------------------

// Unknown endpoint handler
app.get('/*', (req, res) => {
  return res.status(404).send('No food found!');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// -------------------------------------- Start it up, babey! -------------------------------------
module.exports = app.listen(3000, ()=> {console.log(`Listening on port 3000...`);});
