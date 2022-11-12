import Router from 'express';
//import express from 'express';
import readImage from '../utilitis/readImage';
import resizeImage from '../utilitis/sharp_processing';
import path from 'path';
import { promises as fs } from 'fs';
import readAllImage from '../utilitis/readAll';
import express, { Request, Response } from 'express';
const route = express.Router();

route.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname + '/index.html'));

    //res.status(200).send("Server is running ...");
});

route.get(
    '/api',
    async (
        req: express.Request,
        res: express.Response,
        next
    ): Promise<void> => {
        const filename = req.query.filename;

        if (!filename || !req.query.width || !req.query.height) {
            return next(
                'missing values. filename , width and height are required'
            );
        }
        //const allNames = ["encenadaport","fjord", "palmtunnel", " santamonica"];
        const allNames = await readAllImage();

        if (
            typeof filename !== 'string' ||
            !allNames.toLocaleString().includes(filename)
        ) {
            return next(`Invalid input in filename ,width or height. filename must be from these names
    ${allNames} `);
        }

        //Convert variables to number after validation as strings
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        if (width <= 0 || height <= 0) {
            return next(
                'Invalid input. width and height must be a positive number and numbers '
            );
        }
        if (isNaN(width) || isNaN(height)) {
            return next('Invalid input. width and height must be a  string ');
        }

        try {
            const image = await readImage(filename);

            if (!image) {
                return next('error');
            }
            const imageThumPath = await resizeImage(
                String(filename),
                width,
                height,
                image
            );

            res.status(200).sendFile(
                path.join(__dirname, '../../', imageThumPath)
            );
        } catch (error) {
            return next(error);
        }
    }
);

export default route;
