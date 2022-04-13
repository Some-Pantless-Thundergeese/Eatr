import favsReducer from "../client/reducers/favsReducer";
import restaurantsReducer from "../client/reducers/restaurantsReducer";
import setSceneReducer from "../client/reducers/setSceneReducer";

describe('Favorites reducer',()=>{
  let state;

  beforeEach(() => {
    state = {
      favsList: [],
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(favsReducer(undefined, { type: undefined })).toEqual(state);
    });
  });
  
  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'yeehaw' };
      expect(favsReducer(state, action)).toBe(state);
    });
  });

})



describe( 'Restaurants reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      restaurantList: [],
      category: '',
      location: '',
      offset: 0,
    };
  });

  // if an undefined action is entered, only the default state will be returned
  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(restaurantsReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  // if there is an unrecognized action, it should not touch the state and just return it - being the exact same spot in memory
  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(restaurantsReducer(state, action)).toBe(state);
    });
  });
  
});


describe( 'SetScene reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      sceneState: 'home',
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(setSceneReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'yeehaw' };
      expect(setSceneReducer(state, action)).toBe(state);
    });
  });

});