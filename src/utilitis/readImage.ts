import { promises as fs } from 'fs';
import path from 'path';

async function readImage(imageName: string): Promise<Buffer | null> {
    try {
        const root = path.join(
            __dirname,
            '..',
            '..',
            'assets',
            'images',
            'full',
            `${imageName}.jpg`
        );
        const image = await fs.readFile(root);
        return image;
    } catch (err) {
        return null;
    }
}

export default readImage;
