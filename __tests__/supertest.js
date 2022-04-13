const request = require('supertest');
// const express = require('express');
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
      it('responds with 201 status and content type', () => {
        return request(server)
          .get('/restaurants')
          .expect('Content-Type', /application\/json/)
          .expect(201);
      });
    });
  });
});
