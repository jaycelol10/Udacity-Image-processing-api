import 'jasmine';
import supertest from 'supertest';
import app from '../server';

const req = supertest(app);

describe('Sever end point response', () => {
    it('check server listening or not ? ', async () => {
        const query_segmant = '?filename=fjord&width=200&height=200';
        const res = await req.get('/api' + query_segmant);
        expect(res.status).toBe(200);
    });
});
