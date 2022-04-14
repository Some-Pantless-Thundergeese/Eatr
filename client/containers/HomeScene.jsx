/*
* Container for the homepage
* Currently, renders the HomeForm component,
* passing it the click handler used throughout the app
*/

import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getRestaurantsActionCreator} from '../actions/actions.js';
import HomeForm from '../components/HomeForm.jsx'

const HomeScene = (props) => {
  const dispatch = useDispatch();
  // local state used for requesting restaurants from the yelp API
  const [requestInfo, setRequestInfo] = useState({
    category: null,
    location: null
  });

  // handler to update the request info local state with every key input
  const updateRequest = (e) => {
    const { value, name } = e.target;
    setRequestInfo({
      ...requestInfo,
      [name]: value
    });
  }

  // disable form until both fields have been filled out
  const [disableSubmit, setDisableSubmit] = useState(true);
  useEffect(() => {
    if (requestInfo.category === null || requestInfo.location === null ||
        requestInfo.category === '' || requestInfo.location === '') {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  });
  
  const handleRequestSubmission = (e) => {
    e.preventDefault();
    dispatch(getRestaurantsActionCreator({term: requestInfo.category, location: requestInfo.location}));
    props.handleSceneChange(e);
  }

  return (
     // HomeForm houses the first form you see when you load the page that contains the search for type and location
      <div id='homeFormContainer'>
        <HomeForm submitRestuarantRequest={handleRequestSubmission} updateRequestInfo={updateRequest} disableSubmit={disableSubmit} />
      </div>
  )

}

export default HomeScene;

/* CHANGLE LOG
* Originally, HomeForm component was being exported (and imported)
*   HomeScene was not rendering and onClick property was not passed into this...
*   component. Change: props drilled into HomeForm and HomeScene is now being exported.
* Wrapped HomeForm in a div with an id attribute
* Created local state for tracking request category, location, and if form can be submitted
* Added handlers to update local state
* Refactored form submit handler to pull submission info from state, rather than vanilla DOM
* Passing the new submission form and handlers down a level for use on the form
*/