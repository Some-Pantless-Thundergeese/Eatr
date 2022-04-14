/*
* Gets list of favorite restaurants from state
* Creates FavoriteCard components and puts them in an array
* Renders the card components
*/

import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from '../components/FavoriteCard.jsx';

const FavoritesScene = () => {
  const favsList = useSelector(store => store.favs.favsList);
  let favoriteCards = [];
  for (let i = 0; i < favsList.length; i++) {
    const uniqueId = 'favorite' + favsList[i].id;
    favoriteCards.push(<FavoriteCard index={i} key={uniqueId} businessInfo={favsList[i]} />);
  }
  return (
    <div id='favoriteCardsDiv'>
      {favoriteCards}
    </div>
  );
}
export default FavoritesScene;

/*CHANGELOG
* Put array of favorite cards into a div with an id
* Pulled state up to this level by businessInfo prop to FavoriteCard components to pass down the Yelp API business object
* 
*/
