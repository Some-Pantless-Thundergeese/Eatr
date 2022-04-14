import * as types from '../constants/actionTypes.js';

/*
 * Reducer used to update restaurant lists used to display
 * restaurant cards to the user in the feed scene
 */

const initState = {
  restaurantList: [],
  // *** the following 3 pieces of state are never updated in this reducer
  // *** intent of their inclusion here is unclear
  // *** as such, expect that they ought to never be used in the app
  // *** confirmed as must is true with offset
  category: '',
  location: '',
  offset: 0,
};

const restaurantsReducer = (state = initState, action) => {
  let restaurantList;
  switch (action.type) {
    // *** Broadly, sets state to a brand new list of restaurants objects
    // *** Expect to be used with list of restaurants obtained from the Yelp API
    case types.GET_RESTAURANTS: {
      restaurantList = action.payload;
      return {
        ...state,
        restaurantList,
      };
    }
    // ***App will call this reducer repeatedly to ensure that the next restaurant to show is
    // *** ... the first restaurant in restaurant list
    // ***offset?? instead of slicing -- moving through array by incrementing offset?
    case types.GET_NEXT: {
      // ***returning a shallow copy of the array with only the first element removed
      restaurantList = state.restaurantList.slice(1);
      return {
        ...state,
        restaurantList,
      };
    }
    default: {
      return state;
    }
  }
};

export default restaurantsReducer;
