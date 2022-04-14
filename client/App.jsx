/*
* Renders the app's main container
*/

import React from 'react';
import MainContainer from './containers/MainContainer.jsx';

const App = () => {
  return (
    <div id='mainContainerDiv'>
      <MainContainer />
    </div>
  );
};

export default App;

/* CHANGE LOG 
* removed restaurantCard from import and render during cleanup
*/
