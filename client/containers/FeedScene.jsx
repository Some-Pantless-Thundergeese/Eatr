/* Renders Restaurant card and ✓  and X buttons
* Contains event handler that adds 0th element in restaurantList to the favorites
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import { getNextActionCreator, addToFavActionCreator } from '../actions/actions.js';
import RestaurantCard from '../components/RestaurantCard.jsx';
import { useSelector } from 'react-redux';


const FeedScene = () => {
  const currBusiness = useSelector(store => store.restaurants.restaurantList[0]);
  const restaurantsEmpty = useSelector(store => store.restaurants.restaurantList.length === 0);
  const favsExist = useSelector(store => store.favs.favsList.length > 0);

  const dispatch = useDispatch();

  // When like button is pushed, add the restaurant to the favorites
  // In all cases (like and dislike), get the next restaurant for display
  const handleClick = (e) => {
    if (e.target.id === 'like') {
      //dispatch action to add to favorites
      dispatch(addToFavActionCreator());
    }
    //dispatch action to get next restaurant
    dispatch(getNextActionCreator());
  }

  let feedSwitch;

  if (restaurantsEmpty && !favsExist) {
    feedSwitch = <p>Loading your Restaurant Options! Please wait...</p>
  } else if (!restaurantsEmpty) {
    feedSwitch = (
    <div id='restaurantCardDiv'>
      <RestaurantCard business={currBusiness} />
      <div className="btns">
        <button onClick={handleClick} id='dislike'>X</button>
        <button onClick={handleClick} id='like'>✓</button>     
      </div>
    </div>)
  } else if (restaurantsEmpty && favsExist) {
    feedSwitch = <p>Ready to view your results! Please click the Favorites button</p>
  }

  return feedSwitch;
}

export default FeedScene;

/* CHANGLE LOG
* DRY method applied to event handler 'like' 
* RestaurantCard and buttons placed inside div element and semantic attribute id applied
* Added state for isLoading and current restaurant to pass down into the Restaurant Card as props
*/