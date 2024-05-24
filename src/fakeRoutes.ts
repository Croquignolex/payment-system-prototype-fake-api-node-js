import express, {Router} from 'express';

import * as fakeController from "./fakeController";

const router: Router = express.Router();

router.post('/login', fakeController.login);
router.post('/account/register/email', fakeController.register);

router.get('/account/:accountId', fakeController.accountInfo);
router.put('/account/:accountId/addaddress', fakeController.accountAddressUpdate);

router.put('/account/:accountId/transferrecipient', fakeController.contactAdd);
router.get('/account/:accountId/transferrecipient', fakeController.contacts);

router.put('/account/:accountId/transferpayer', fakeController.accountAdd);
router.get('/account/:accountId/transferpayer', fakeController.accounts);
router.get('/cmmtncmmtntransfer/transferStatus/:accountId', fakeController.transferStatus);

router.post('/cmmtncmmtntransfer/:accountId/account', fakeController.transferAddMtnToMtn);

export default router;