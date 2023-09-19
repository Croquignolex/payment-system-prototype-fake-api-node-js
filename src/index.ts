import express, {Application, Router} from 'express';

const app:Application = express();

const router: Router = express.Router();

const routes = require('./routes/fakeRoute');

router.use("", routes);

app.use("/api/v1", router);

app.listen(8000, ():void => {
    console.log(`Server Running here 👉 https://localhost:8000`);
});