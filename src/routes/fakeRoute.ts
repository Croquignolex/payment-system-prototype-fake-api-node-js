import express, {Router} from 'express';

import {register} from "../controllers/fakeController";

const router: Router = express.Router();

// router.post('/login', login);
router.post('/account/register/email', register);

export default router;