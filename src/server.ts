import express from 'express';
import route from './routes/api';
const app = express();
const port = 3000;

app.use(route);
app.get('/',(req,res)=>{

    res.status(200).send("Server is running");
})
app.listen(port, () => {
    const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
    console.log(`Server started on port ${port} Please go to ${url}`);
});

export default app;
