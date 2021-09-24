//import { shortProcess, longProcess } from '../../src/index';

jest.useRealTimers();

const request = require('supertest');
const app = require('./app');


describe('Flickr List Query Tests', () => {

    jest.setTimeout(30 * 1000); // not currently working...
    //await longProcess();

    it('### GET / --> Check response statusCode is 200, content type is JSON & stucture is correct',() => {
        return request(app)
        .get('/list')
        .set('Accept', 'application/json')
        .expect('content-type',/json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        link: expect.any(String),
                        media: expect.objectContaining({
                            m: expect.any(String)
                        }),
                        date_taken: expect.any(String),
                        description: expect.any(String),
                        published: expect.any(String),
                        author: expect.any(String),
                        author_id: expect.any(String),
                        tags: expect.any(String),
                    })
                ])
            );
        });
    });
});


describe('Flickr Search Query Tests', () => {

    it('### GET /list/tag --> Check response statusCode is 200, content type is JSON & stucture is correct',() => {
        return request(app)
        .get('/list/cars')
        .set('Accept', 'application/json')
        .expect('content-type',/json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        link: expect.any(String),
                        media: expect.objectContaining({
                            m: expect.any(String)
                        }),
                        date_taken: expect.any(String),
                        description: expect.any(String),
                        published: expect.any(String),
                        author: expect.any(String),
                        author_id: expect.any(String),
                        tags: expect.any(String),
                    })
                ])
            );
        });
    });
});
