import * as types from '../constants/actionTypes.js';

/* 
* Adds a restaurant (action.payload) to the favsList by creating a copy 
* and pushing it onto favsList and updating state.
* Expect state to be updated during the feedScene, and be accessed for display
* in the FavoritesScene
*/

const initState = {
  favsList: [],
};

const favsReducer = (state = initState, action) => {
  let favsList;
  switch (action.type) {
    case types.ADD_TO_FAVS: {
      favsList = state.favsList.slice();
      favsList.push(action.payload);
      return {
        ...state,
        favsList,
      };
    }
    //case for call to database (not setup yet)
    case types.GET_FAVS: {
      // *** if/when in use, replaces the entire favList with the list
      // *** provided in the payload
      favsList = action.payload;
      return {
        ...state,
        favsList,
      };
    }
    default: {
      return state;
    }
  }
};

export default favsReducer;
