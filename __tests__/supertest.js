const request = require('supertest');
// const app = require;
// const path = require('path');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/restaurants', () => {
    describe('GET', () => {
      const restaurantsList = {
        term: 'pizza',
        location: 'Brooklyn',
      };

      it('responds with 201 status and content type', () => {
        return request(server)
          .get('/restaurants')
          .query(restaurantsList)
          .expect('Content-Type', /application\/json/)
          .expect(201);
      });

      it('responds with the updated restaurant list', () => {
        return request(server)
          .get('/restaurants')
          .query(restaurantsList)
          .then((response) => {
            expect(Array.isArray(response.body)).not.toEqual(false);
            expect(response.body.length).not.toEqual(undefined);
          });
      });

      it('responds to bad query with 400 status', () => {
        const invalReq = {};
        return request(server)
          .get('/restaurants')
          .query(invalReq)
          .expect(400)
          .then((response) => {
            expect(response.body.error);
          });
      });
    });
  });
});

//if the request format is wrong it should be an error
