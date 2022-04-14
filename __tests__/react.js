//imports
import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
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
    const props = {
      business: {
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
    }
    //beforeAll/beforeEach if necessary
    //test a,b,c
  })
// *** Header
  describe('Header', () => {
    //TODO
  });
// *** HomeForm
  describe('HomeForm', () => {
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

