import 'jasmine';
import readAllImage from '../utilitis/readAll';
import path from 'path';
describe('Test get image functionality', () => {
    it('test is succesful if return image object ', async () => {
        const root = path.join(
            __dirname,
            '..',
            '..',
            'assets',
            'images',
            'full'
        );
        const image = await readAllImage();
        expect(typeof image).toBe('object'); //List object
    });
});
