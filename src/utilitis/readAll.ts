import { promises as fs } from 'fs';
import path from 'path';

async function readAllImage() {
    try {
        const root = path.join(
            __dirname,
            '..',
            '..',
            'assets',
            'images',
            'full'
        );
        const image = await fs.readdir(root);
        image.map((image) => {
            image.split('.');
        });
        console.log(typeof image);
        return image;
    } catch (err) {
        return [];
    }
}
export default readAllImage;
