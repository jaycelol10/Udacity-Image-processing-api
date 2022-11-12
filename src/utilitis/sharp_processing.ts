import sharp from 'sharp';
import { promises as fs } from 'fs';

const resizeImage = async (
    fname: string,
    width: number,
    height: number,
    image: Buffer
): Promise<string> => {
    const thumpPath = `./assets/images/thumb/${fname}-${width}X${height}.jpg`;
    try {
        await fs.readFile(thumpPath);

        return thumpPath;
    } catch (err) {
        //console.log("This is sharp err",err)
        const thumbImage = await sharp(image)
            .resize(width, height)
            .toFormat('jpg')
            .toBuffer();
        await fs.writeFile(thumpPath, thumbImage);
    }
    return thumpPath;
};

export default resizeImage;
