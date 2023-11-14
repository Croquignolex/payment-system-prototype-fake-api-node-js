import express, {Router} from 'express';

import {register, accountInfo, accountAddressUpdate, contactAdd, accountAdd, contacts, accounts} from "../controllers/fakeController";

const router: Router = express.Router();

router.post('/account/register/email', register);
router.get('/account/:accountId', accountInfo);
router.put('/account/:accountId/addaddress', accountAddressUpdate);
router.put('/account/:accountId/transferrecipient', contactAdd);
router.get('/account/:accountId/transferrecipient', contacts);
router.put('/account/:accountId/transferpayer', accountAdd);
router.get('/account/:accountId/transferpayer', accounts);

export default router;