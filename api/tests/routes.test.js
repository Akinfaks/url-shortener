import request from 'supertest';
import { app } from '../';

describe('Get Root', () => {
  it('should get /api', async () => {
    const res = await request(app)
      .get('/api')
    expect(res.statusCode).toEqual(200);
  })
});

describe('Encode Long Url', () => {
    it('should get api/encode', async () => {
      const res = await request(app)
        .get('/api/encode')
        .query({ longUrl: 'http://www.google.com' })
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('{"short":"http://127.0.0.1:8000/06LAze","long":"http://www.google.com","hash":"06LAze","status":200,"statusTxt":"OK"}');
    })
});

describe('Decode Short URL', () => {
    it('should get api/decode', async () => {
      const res = await request(app)
        .get('/api/decode')
        .query({ shortUrl: 'http://127.0.0.1:8000/06LAze' })
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('{"url":"http://www.google.com","hash":"06LAze","status":200,"statusTxt":"OK"}');
    })
});

describe('Shortener URL Hit Stat', () => {
    it('should get api/statistic', async () => {
      const res = await request(app)
        .get('/api/statistic')
        .query({ url_path: '06LAze' })
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('{"hash":"06LAze","hit":0,"url_long":"http://www.google.com","url_short":"http://127.0.0.1:8000/06LAze","status":200,"statusTxt":"OK"}');
    })
});

describe('Shortener URLS List', () => {
    it('should get api/list', async () => {
      const res = await request(app)
        .get('/api/list')
        .query({ url_path: '06LAze' })
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('[{"hash":"06LAze","short":"http://127.0.0.1:8000/06LAze","long":"http://www.google.com","hit":0}]');
    })
});

describe('Shortener URLS redirect', () => {
    it('should get /:hash', async () => {
      const res = await request(app)
        .get('/06LAze')
        expect(res.statusCode).toEqual(302);
        expect(res.text).toEqual('Found. Redirecting to http://www.google.com');
    })
});
