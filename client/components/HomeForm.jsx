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
                <label htmlFor="location">
                  Location: 
                </label>

                <input type="text" id="location" name='location' onChange={props.updateRequestInfo} placeholder="Enter your city or zip here" alt="locationField">
                </input>
                <br></br>

                <label htmlFor="category">
                  Category:
                </label>

                <input type="text" id="category" name='category' onChange={props.updateRequestInfo} placeholder="Whatcha hungry fa?" alt="categoryField">
                </input>
                <br></br>

                <button className="btn" type="submit" value="Submit" id="submit" disabled={props.disableSubmit} onClick={props.submitRestaurantRequest} alt="Submit Your Request" >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HomeForm;

/* CHANGELOG
* Removed useState import, was not being used
*/
