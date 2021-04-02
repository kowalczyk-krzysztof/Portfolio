import { Request, Response, NextFunction } from 'express';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
// Importing config.env
dotenv.config({ path: 'config.env' });
// Setting API KEY
const API_KEY = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(API_KEY);

// @desc    Send email
// @route   POST /api/v1/email/sendemail
// @access  Public
export const sendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    sgMail.send({
      from: 'kowalczykkrzysztof893@gmail.com',
      to: 'kowalczykkrzysztof893@gmail.com',
      subject: 'Test Emailaaa',
      text: 'Yolo',
    });
    res.status(200).json('Success');
  } catch (err) {
    console.log(err);
  }
};
