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

const MIN_FAVORITES = 4;


const Header = (props) => {
  // scene is used to determine how to render the header, including which buttons to render 
  const scene = props.scene;
  // *** hideFavorites evaluates to true until length > MIN_FAVORITES constant
  const hideFavorites = props.numFavorites < MIN_FAVORITES;
  // switches happen when you 
    switch (scene) {
      case 'feed':
        return (
          <div id="homepageHeader" className="feedHeaderDiv">
            <h1>Eatr</h1>
            <div className="btns">
              <button id="back" onClick={props.onClick}>Back</button>
              <button id="favorites" disabled={hideFavorites} onClick={props.onClick}>Favorites</button>
            </div>
          </div>
        );
      case 'favorites':
        return (
          <div id="homepageHeader" className="favoritesHeaderDiv">
            <h1>Eatr </h1>
            <button id="back" onClick={props.onClick}> Back </button>
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
* Pulled state out of component and into main container:
*   scene and number of favorited restaurants are now passed down as props
*/











