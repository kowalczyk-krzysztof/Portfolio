import express, { Router } from 'express';
// Controllers
import { sendEmail } from '../controllers/email';

const emailRouter: Router = express.Router();

emailRouter.route('/sendemail').post(sendEmail);

export default emailRouter;
