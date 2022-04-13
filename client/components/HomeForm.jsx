/*
* Renders a form with location and Category input
* 
* 
*/

import React from 'react';

const HomeForm = (props) => {
    return (
        <div className="home-form">
            <form>
                <label htmlFor="location">Location: </label><br></br>
                <input type="text" id="location"></input><br></br>
                <label htmlFor="category">Category:</label><br></br>
                <input type="text" id="category"></input><br></br>
                <input type="submit" value="Submit" id="submit" onClick={props.onClick}></input>
            </form>
        </div>
    );
};

export default HomeForm;

/* CHANGELOG
* Removed useState import, was not being used
*/
