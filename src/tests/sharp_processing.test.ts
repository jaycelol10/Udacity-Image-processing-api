import 'jasmine';
import resizeImage from '../utilitis/sharp_processing';
import readImage from '../utilitis/readImage';
import path from 'path';

describe('Test resizing image process', () => {
    it('After process is finshed should return thumpPass', async () => {
        const filename = 'fjord';
        const image = await readImage(filename);
        if (!image) {
            return;
        }
        const thumpPath = await resizeImage(filename, 100, 100, image);
        expect(thumpPath).toEqual(
            `./assets/images/thumb/${filename}-100X100.jpg`
        );
        console.log(
            `ThumpPass:${thumpPath} , ToEqual:./assets/images/thumb/${filename}-100X100.jpg`
        );
    });
});
