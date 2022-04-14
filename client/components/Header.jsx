/*
* Depending on scene, may or may not render a back and or favorites button
* Favorites button will only be active after a certain amount of favorite restaurants exist
* All buttons use the same handler obtained in props from main container
* 
*REFACTOR OPTIONS
* MAIN CONTAINER (holds state) >renders> HEADER COMPONENT (uses state)
* HEADER COMPONENT: needs to know what scene it is, and IF the scene is "feed", then how many favs have been picked
* MAIN CONTAINER STATE NEEDED: scene, num favs
*
* ---- or ----
* Each scene container renders its own header component
* Gets the scene state from the main container
* Only the feed scene container will pull the favsList length state from store
*/


import React from 'react';
import {useSelector} from 'react-redux';


const Header = (props) => {
  const scene = useSelector(store => store.setScene.sceneState);
  // *** hideFavorites evaluates to true until length > 4
  const hideFavorites = useSelector(store => store.favs.favsList.length < 4);
  // switches happen when you 
    switch (scene) {
      case 'feed':
        return (
          <div id="feedHeaderDiv">
            <button id="back" onClick={props.onClick}>Back</button>
            <h1>Eatr</h1>
            <button id="favorites" disabled={hideFavorites} onClick={props.onClick}>Favorites</button>
          </div>
        );
      case 'favorites':
        return (
          <div id="favoritesHeaderDiv">
            <button id="back" onClick={props.onClick}> Back </button>
            <h1> Eatr </h1>
            <p> Congrats! Here are your liked options</p>
          </div>
        );
      default:
        return (
          <h1 id="homepageHeader">Eatr</h1>
        );
    }
}
export default Header;

/* CHANGELOG
* Added divs with ids for styling purposes, made some notes on possible refactor options 
*/











