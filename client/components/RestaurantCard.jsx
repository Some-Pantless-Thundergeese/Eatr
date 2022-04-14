/*
* Renders the 0th element in restaurantList
* Has some functionality for rendering favoritesList but is not a switch case
* Gets information from the business object, does some formatting, and displays to user
*/

import React from 'react';

const RestaurantCard = (props) => {
  // const isLoading = props.isLoading;
  const business = props.business;
  
  const location = business.location;
  const formattedAddress = `${location['address1']} ${location['address2'] ? location['address2'] : ''}\n${location['city']}, ${location['state']} ${location['zip_code']}`;
  return(
    <>
    <article className="restaurant-card">
      <h3>{business.name}</h3>
      <img src={business.image_url} alt="main restaurant photo"></img>
      <section className="review-info">
        <p>Avg. Review: {business.rating}</p>
        <p># of Reviews: {business.review_count}</p>
      </section>
      <section className="business-info">
        <p>Price: {business.price}</p>
        <p>{business.hours.start}</p>
      </section>
      <section className="location-info">Location: {formattedAddress}</section>
      <section className="reviews">WE (the restaurant) NEED TO GET REVIEWS!</section>
    </article>
    </> 
  );
}

export default RestaurantCard;

/* CHANGLE LOG 
* Removed unused store import
* Removed scene state from the card, not used or needed as scene is always Feed for this card
* Removed conditional whereby business for this card was determined by scene, for same reason as above
* Pulled isLoading and current business state up to Feed Scene, to be passed down via props
* Pulled isLoading rendering up to the Feed sceen 
*/