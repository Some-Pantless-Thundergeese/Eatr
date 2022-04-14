/*
* Gets and formats info about business and displays it to the user
*
*/

import React from 'react';

const FavoriteCard = (props) => {
  const business = props.businessInfo;
  // const business = useSelector(store => store.favs.favsList[props.index]);
  const location = business.location;
  const formattedPhone = `(${business.phone.slice(2,5)}) ${business.phone.slice(5,8)}-${business.phone.slice(8,12)}`;
  const formattedStreetAddress = `${location['address1']} 
    ${location['address2'] ? location['address2'] : ''}`
  const formattedCSZ = `${location['city']}, ${location['state']} ${location['zip_code']}`;
    
  return(
    <article className="favorite-card">
      <img src={business.image_url} alt="restaurant's main photo"></img>
      <section className="favorites-business-info">
        <h3>{business.name}</h3>
        <address>
          <p>
            <span>{formattedStreetAddress}</span>
            <br></br>
            <span>{formattedCSZ}</span>
          </p>
          <a href={`tel:+${business.phone}`}>{formattedPhone}</a>
        </address>
      </section>
    </article>
  );
}
export default FavoriteCard;

/* CHANGE LOG:
* Remove useDispatch from import, not used
* Refactored with lifting state up to parent component.
* Removed useSelector and reassigned business with props passed down
* Refactored address to remove 'null' or any other falsy values from "Address 2"
* Refactored address into two variables to properly render as two lines in DOM
* Refactored phone slicing to properly render US phone numbers by incresing slice index by 1
*/