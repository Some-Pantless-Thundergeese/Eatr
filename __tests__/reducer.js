import favsReducer from '../client/reducers/favsReducer';
import restaurantsReducer from '../client/reducers/restaurantsReducer';
import setSceneReducer from '../client/reducers/setSceneReducer';

// ------------------------------------------ Favorites reducer testing --------------------------------------------
describe('Favorites reducer', () => {
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

  // ------------------------------------------ ADD_TO_FAVS action tester  --------------------------------------------
  describe('action: ADD_TO_FAVS', () => {
    const action = {
      type: 'ADD_TO_FAVS',
      payload: {
        name: 'House of E',
        location: {
          address1: '72 Hooker Avenue',
          city: 'Somerville',
          state: 'MA',
          zip_code: '02144',
        },
        phone: '6098709617',
        rating: '3.3',
        price: '$',
      },
    };
    const action2 = {
      type: 'ADD_TO_FAVS',
      payload: {
        name: 'Frank & Steins Craft Hot Dog Barcade',
        location: {
          address1: '72 Hooker Avenue',
          city: 'Somerville',
          state: 'MA',
          zip_code: '02144',
        },
        phone: '6098709617',
        rating: '5.0',
        price: '$',
      },
    };

    it('adds a favorite to favsList', () => {
      const { favsList } = favsReducer(state, action);
      expect(favsList[0]).toEqual(action.payload);
    });
    it('does not replace favorites already in favsList', () => {
      state = favsReducer(state, action);
      const { favsList } = favsReducer(state, action2);
      expect(favsList.length).toEqual(2);
    });

    // -------------------------- Confirm this action does not mutate state, rather returns a new, updated state ---------------
    it('returns a state object not strictly equal to the original', () => {
      const newState = favsReducer(state, action);
      expect(newState).not.toBe(state);
    });

    it('includes a favsList not strictly equal to the original', () => {
      const { favsList } = favsReducer(state, action);
      expect(favsList).not.toBe(state.favsList);
    });
    // --------------------------------------------------------------------------------------------------------------------------
  });

  // ------------------------------------------ GET_FAVS action tester  --------------------------------------------
  describe('action: GET_FAVS', () => {
    const action = {
      type: 'GET_FAVS',
      payload: {
        name: 'House of E',
        location: {
          address1: '72 Hooker Avenue',
          city: 'Somerville',
          state: 'MA',
          zip_code: '02144',
        },
        phone: '6098709617',
        rating: '3.3',
        price: '$',
      },
    };
    const action2 = {
      type: 'GET_FAVS',
      payload: {
        name: 'Frank & Steins Craft Hot Dog Barcade',
        location: {
          address1: '72 Hooker Avenue',
          city: 'Somerville',
          state: 'MA',
          zip_code: '02144',
        },
        phone: '6098709617',
        rating: '5.0',
        price: '$',
      },
    };

    it('should update state with the list of favorites', () => {
      const { favsList } = favsReducer(state, action);
      expect(favsList).toEqual(action.payload);
    });

    it('should replace an old favsList with a new favsList', () => {
      state = favsReducer(state, action);
      const { favsList } = favsReducer(state, action2);
      expect(favsList).toEqual(action2.payload);
    });

    // -------------------------- Confirm this action does not mutate state, rather returns a new, updated state ---------------
    it('returns a state object not strictly equal to the original', () => {
      const newState = favsReducer(state, action);
      expect(newState).not.toBe(state);
    });

    it('includes a favsList not strictly equal to the original', () => {
      const { favsList } = favsReducer(state, action);
      expect(favsList).not.toBe(state.favsList);
    });
    // --------------------------------------------------------------------------------------------------------------------------
  });
});

// ------------------------------------------ Restaurants reducer testing ------------------------------------------------------
describe('Restaurants reducer', () => {
  let state;

  // matching original state
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

  // ------------------------------------------ GET_RESTAURANTS action tester  --------------------------------------------
  describe('action: GET_RESTAURANTS', () => {
    const action = {
      type: 'GET_RESTAURANTS',
      payload: [
        {
          name: 'House of E',
          location: {
            address1: '72 Hooker Avenue',
            city: 'Somerville',
            state: 'MA',
            zip_code: '02144',
          },
          phone: '6098709617',
          rating: '3.3',
          price: '$',
        },
        {
          name: 'Frank & Steins Craft Hot Dog Barcade',
          location: {
            address1: '72 Hooker Avenue',
            city: 'Somerville',
            state: 'MA',
            zip_code: '02144',
          },
          phone: '6098709617',
          rating: '5.0',
          price: '$',
        },
      ],
    };

    const action2 = {
      type: 'GET_RESTAURANTS',
      payload: [
        {
          name: 'M Shanghai',
          location: {
            address1: '453 Grand Ave',
            city: 'Brooklny',
            state: 'NY',
            zip_code: '11211',
          },
          phone: '7183467298',
          rating: '3.4',
          price: '$$',
        },
        {
          name: 'Tonys Pizza',
          location: {
            address1: '114 Wyckoff Ave',
            city: 'Brooklyn',
            state: 'NY',
            zip_code: '11237',
          },
          phone: '9178902557',
          rating: '4.3',
          price: '$',
        },
      ],
    };
    it('should update state with the list of restaurants', () => {
      // state = restaurantsReducer(state, action)
      // restaurantList = state.restaurantList
      const { restaurantList } = restaurantsReducer(state, action);
      expect(restaurantList).toEqual(action.payload);
    });

    it('should replace an old restaurant list with a new restaurant list', () => {
      state = restaurantsReducer(state, action);
      const { restaurantList } = restaurantsReducer(state, action2);
      expect(restaurantList).toEqual(action2.payload);
    });
    // -------------------------- Confirm this action does not mutate state, rather returns a new, updated state ---------------
    it('returns a state object not strictly equal to the original', () => {
      const newState = restaurantsReducer(state, action);
      expect(newState).not.toBe(state);
    });

    it('includes a restaurantList not strictly equal to the original', () => {
      const { restaurantList } = restaurantsReducer(state, action);
      expect(restaurantList).not.toBe(state.restaurantList);
    });
    // --------------------------------------------------------------------------------------------------------------------------
  });

  describe('GET_NEXT', () => {
    const action = {
      type: 'GET_NEXT',
    };
    it('should return a copy of the action with the first element removed', () => {
      state = {
        restaurantList: [
          {
            name: 'M Shanghai',
            location: {
              address1: '453 Grand Ave',
              city: 'Brooklny',
              state: 'NY',
              zip_code: '11211',
            },
            phone: '7183467298',
            rating: '3.4',
            price: '$$',
          },
          {
            name: 'Tonys Pizza',
            location: {
              address1: '114 Wyckoff Ave',
              city: 'Brooklyn',
              state: 'NY',
              zip_code: '11237',
            },
            phone: '9178902557',
            rating: '4.3',
            price: '$',
          },
        ],
        category: '',
        location: '',
        offset: 0,
      };
      const { restaurantList } = restaurantsReducer(state, action);
      expect(restaurantList.length).toEqual(1);
    });
    // -------------------------- Confirm this action does not mutate state, rather returns a new, updated state ---------------
    it('returns a state object not strictly equal to the original', () => {
      const newState = restaurantsReducer(state, action);
      expect(newState).not.toBe(state);
    });

    it('includes a restaurantList not strictly equal to the original', () => {
      const { restaurantList } = restaurantsReducer(state, action);
      expect(restaurantList).not.toBe(state.restaurantList);
    });
    // --------------------------------------------------------------------------------------------------------------------------
  });
});

// ------------------------------------------ SetScene reducer testing ------------------------------------------------------
describe('SetScene reducer', () => {
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

  // ------------------------------------------ SET_SCENE action tester  --------------------------------------------
  describe('action: SET_SCENE', () => {
    const action = {
      type: 'SET_SCENE',
      payload: 'yeehaw',
    };
    it('should update the sceneState', () => {
      const { sceneState } = setSceneReducer(state, action);
      expect(sceneState).toEqual(action.payload);
    });

    // -------------------------- Confirm this action does not mutate state, rather returns a new, updated state ---------------
    it('returns a state object not strictly equal to the original', () => {
      const newState = setSceneReducer(state, action);
      expect(newState).not.toBe(state);
    });

    it('includes a sceneState not strictly equal to the original', () => {
      const { sceneState } = setSceneReducer(state, action);
      expect(sceneState).not.toBe(state.sceneState);
    });
    // --------------------------------------------------------------------------------------------------------------------------
  });
});
