/*
* Container for the homepage
* Currently, renders the HomeForm component,
* passing it the click handler used throughout the app
*/

import React from 'react';
import HomeForm from '../components/HomeForm.jsx'

const HomeScene = (props) => {

    return (
        <div id='homeFormContainer'>
          <HomeForm onClick={props.onClick} />
        </div>
    )

}

export default HomeScene;

/* CHANGLE LOG
* Originally, HomeForm component was being exported (and imported)
*   HomeScene was not rendering and onClick property was not passed into this...
*   component. Change: props drilled into HomeForm and HomeScene is now being exported.
* Wrapped HomeForm in a div with an id attribute
*/