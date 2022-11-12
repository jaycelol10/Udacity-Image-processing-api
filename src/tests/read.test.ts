import 'jasmine';
import readImage from '../utilitis/readImage';
describe('Test get image functionality', () => {
    it('test is succesful if return image object ', async () => {
        const filename = 'fjord';
        const image = await readImage(filename);
        expect(typeof image).toBe('object'); //Buffer object
    });
});
