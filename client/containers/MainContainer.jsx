/*
* Renders a scene based on the current scene state
* Logic for two onclick event handlers:
* 1. Handling scene changes via a back button in feed and favorites, or submit button in home
* 2. Handling restaurant list request to backend from the home scene
*/


import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { setSceneActionCreator, getRestaurantsActionCreator } from '../actions/actions.js';

import Header from '../components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx'


const MainContainer = () => {
  const dispatch = useDispatch();
  const scene = useSelector(store => store.setScene.sceneState);

  // *** figure out the scene state of the store, is it home feed or favorites
  const handleSceneChange = (e) => {
    if (scene === 'feed' && e.target.id === 'back') dispatch(setSceneActionCreator('home'));
    else if (scene === 'feed' && e.target.id === 'favorites') dispatch(setSceneActionCreator('favorites'));
    else if (scene === 'favorites' && e.target.id === 'back') dispatch(setSceneActionCreator('feed'));
    else if (scene === 'home' && e.target.id === 'submit') dispatch(setSceneActionCreator('feed'));
  }

  // *** possible refactoring opportunity using state instead of hardcoded DOM manipulation
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const form = e.target.parentNode;
    const location = form.children[2].value;
    const category = form.children[6].value;
    dispatch(getRestaurantsActionCreator({term: category, location: location}));
    handleSceneChange(e);
  }
  // *** Depending on current scene in state, assign the correct scene container to renderSwitch variable
  const renderSwitch = () => {
    switch(scene) {
      case 'feed':
        return (
          <div id='feedSceneContainer'>
            < FeedScene />
          </div>
        )
      case 'favorites':
        return (
          <div id='favoritesSceneContainer'>
            < FavoritesScene />
          </div>
        )
      default:
        return (
          <div id='homeSceneContainer'>
            < HomeScene onClick={handleFormSubmission}/>
          </div>
        );
    }
  }
  // render Header and scene
  return (
    <main>
      <div id='headerContainer'>
        <Header onClick={handleSceneChange}/>
      </div>
      {renderSwitch()}
    </main>
  )
}

export default MainContainer;

/* CHANGE LOG 
* import Component removed since functional component and using hooks
* changed event handler logic for the submit button on home page to be an explicit else-if, 
*   rather than implicit else fallback; update made for clarity
* Wrapped the scene components in divs, gave the divs ids
* Wrapped the header component in the in a div for easier styling later
*/
