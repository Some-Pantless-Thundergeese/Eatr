//imports
import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { getByLabelText, render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime'; //necessary?

//import 
import FavoriteCard from '../client/components/FavoriteCard';
import Header from '../client/components/Header';
import HomeForm from '../client/components/HomeForm';
import RestaurantCard from '../client/components/RestaurantCard';

//Testing Scope

describe('Unit testing React presentational components', () => {
// *** FavoriteCard
  describe('FavoriteCard', () => {
    //TODO
    // Testing formatted address?
    //mock state business{name,location,phone,imgURL}    
    let card;
    const props = {
      businessInfo: {
        id: 'zj8Lq1T8KIC5zwFief15jg',
        alias: 'prince-street-pizza-new-york-2',
        name: 'Prince Street Pizza',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/prince-street-pizza-new-york-2?adjust_creative=WcIRf1tjL5oIunCirSaOFw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=WcIRf1tjL5oIunCirSaOFw',
        review_count: 4276,
        categories: [
          {
            alias: 'pizza',
            title: 'Pizza'
          },
          {
            alias: 'italian',
            title: 'Italian'
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 40.72308755605564,
          longitude: -73.99453001177575
        },
        transactions: [
          'pickup',
          'delivery'
        ],
        price: '$',
        location: {
          address1: '27 Prince St',
          address2: null,
          address3: '',
          city: 'New York',
          zip_code: '10012',
          country: 'US',
          state: 'NY',
          display_address: [
            '27 Prince St',
            'New York, NY 10012'
          ]
        },
        phone: '+12129664100',
        display_phone: '(212) 966-4100',
        distance: 1961.8771417367063,
        hours: [
          {
            is_overnight: true,
            start: '1000',
            end: '0300',
            day: 3
          }
        ]
      }
    };

    //beforeAll/beforeEach if necessary
    beforeAll(() => {
      card = render(<FavoriteCard {...props} />);      
    });

    test('Renders a business card with the correct information', () => {      
      // A business should display an image in an <img>, business name in an <h3>, 
      // formatted address in a <p> and formatted phone in an <a>
      expect(card.getByRole('img')).toBeVisible() //image
      expect(card.getByRole('img')).toHaveAttribute('src', 'https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg') //image
      expect(card.getByRole('img')).toHaveAttribute('alt', `restaurant's main photo`); //image
      expect(card.getByRole('heading')).toHaveTextContent('Prince Street Pizza'); //businessName
      expect(((card.getByRole('heading').nextSibling).firstChild).firstChild).toHaveTextContent('27 Prince St'); //formatted address
      expect(((card.getByRole('heading').nextSibling).firstChild).firstChild.nextSibling.nextSibling).toHaveTextContent('New York, NY 10012'); //formatted address
      expect(((card.getByRole('heading').nextSibling).firstChild).nextSibling).toHaveTextContent('(212) 966-4100') //formatted phone   
    });
  });

  // *** HomeForm
  describe('HomeForm', () => {
    //TODO
      //initialize form
      //set props object to mock data
    let form;
    const props = {
      updateRequestInfo: jest.fn(),
      disableSubmit: false,
      submitRestaurantRequest: jest.fn(),
    };

    //beforeall render a homeform passing in props
    beforeEach(() => {
      form = render(<HomeForm {...props}/>);
    });
    
    //test
    //expect label to have location text
      //expect input type?
      //expect category to have category text
      //expect input type
    test('Renders text and text input field for location and category', () => {
      //label elements do not have implicit roles and assinging roles is not permitted
      // form.debug(form.getByLabelText('Location:'));
      expect(form.getByLabelText('Location:').previousSibling).toHaveTextContent('Location:');
      expect(form.getByLabelText('Location:')).toHaveAttribute('id', 'location');
      expect(form.getByLabelText('Category:').previousSibling).toHaveTextContent('Category:');
      expect(form.getByLabelText('Category:')).toHaveAttribute('id', 'category');
    });

    // Expect button to render with submit text
    // expect onClick event handler to...
    test('Renders a button with submit text and handles submit functionality', () => {
      const submitButton = form.getByRole('button');
      form.debug(submitButton);
      userEvent.click(submitButton);
      expect(props.submitRestaurantRequest).toHaveBeenCalledTimes(1);
    });
    
    // market.findAllByRole('button')
    //     .then((buttons) => {console.log('buttons', buttons)
    //       expect(buttons).toHaveLength(2)
    //     });

  });

// *** Header
  describe('Header', () => {
    //TODO
  });

// *** RestaurantCard
  describe('RestaurantCard', () => {
    //TODO
  });
});




// Option questions
// *** How do we mock state?
// *** How do we mock props?
// *** How do we do TDD for refactoring? Do we need to rewrite tests to reflect how state & props are changing? I would guess yes.

