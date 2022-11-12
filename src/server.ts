import express from 'express';
import route from './routes/api';
const app = express();
const port = 3000;

app.use(route);

app.listen(port, async (): Promise<void> => {
    const url = await `\x1b[2mhttp://localhost:${port}\x1b[0m`;
    console.log(`Server started on port ${port} Please go to ${url}`);
});

export default app;
