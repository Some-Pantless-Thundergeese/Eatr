import * as types from '../constants/actionTypes.js';

/* 
* Currently used to control state of page 'scene'
* App currently has 3 'scenes' homepage, feed, and favs
* and will render one of those scenes accordingly depending on state set here
*/

const initState = {
  sceneState: 'home',
};

const setSceneReducer = (state = initState, action) => {
  let sceneState;
  switch (action.type) {
    case types.SET_SCENE: {
      sceneState = action.payload;
      return {
        ...state,
        sceneState,
      };
    }
    default: {
      return state;
    }
  }
};

export default setSceneReducer;
