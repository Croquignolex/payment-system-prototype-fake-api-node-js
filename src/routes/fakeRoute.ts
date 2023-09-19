import express, {Router} from 'express';

import {login} from "../controllers/fakeController";

const router: Router = express.Router();

router.get('/login', login);

module.exports = router;