import axios from 'axios';
import * as types from '../constants/actionTypes.js';


// *** Makes a call to the backend to get restaurants with body (location, and search term?)
export const getRestaurantsActionCreator = body => async dispatch => {
  // FETCH API WITH AXIOS
  const restaurants = await axios.get('/restaurants', {
    params: body
  });
  dispatch({
    type: types.GET_RESTAURANTS,
    payload: restaurants.data,
  });
};

// *** Adds the first restaurant in the restaurant list to the favorites restaurant list
export const addToFavActionCreator = () => (dispatch, getState) => {
  const favorite = getState().restaurants.restaurantList[0];
  // FETCH API WITH AXIOS
  // add favorite to database (not set up yet)
  // const addFav = await axios.post(URL);
  dispatch({
    type: types.ADD_TO_FAVS,
    // payload: addFav.data,
    payload: favorite
  });
};

// *** Not in use, was indended for use with a currently nonexistent database
export const getFavsActionCreator = () => async (dispatch) => {
  // FETCH API WITH AXIOS
  // get favorites to database (not set up yet)
  // const favRestaurants = await axios.post(URL);
  dispatch({
    type: types.GET_FAVS,
    payload: faveRestaurants.data,
  });
};

// *** gets the next restaurnt in the restaurant list into index 0
// *** by slicing the list. No payload needed
export const getNextActionCreator = () => {
  return {
    type: types.GET_NEXT,
    payload: null
  };
};

// *** sets scene rendered by main container and header
export const setSceneActionCreator = (scene) => {
  return {
    type: types.SET_SCENE,
    payload: scene,
  };
};

/* CHANGE LOG:
* removed async from addToFavActionCreator
*
*
*/