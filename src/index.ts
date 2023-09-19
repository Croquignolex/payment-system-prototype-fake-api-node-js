import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes/fakeRoute';

const app:Application = express();

app.use(cors({allowedHeaders: "*", methods: "*", origin: "*"}));
app.use(bodyParser.json());
app.use("/api/v1", routes);

app.use("/ping", (req: Request, res: Response) => res.send("pong"));

app.listen(8000, ():void => {
    console.log(`Server Running here 👉 http://localhost:8000`);
});