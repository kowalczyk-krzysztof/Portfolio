import { Request, Response, NextFunction } from 'express';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
// Importing config.env
dotenv.config({ path: 'config.env' });
// Setting API KEY
const API_KEY = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(API_KEY);
// My email
const MY_EMAIL = process.env.MY_EMAIL as string;

// @desc    Send email
// @route   POST /api/v1/email/sendemail
// @access  Public
export const sendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const senderEmail: string = req.body.email;
    const senderName: string = req.body.name;
    const sentMessage: string = req.body.message;

    // Because sendGrid requires verified sender, I have to send email from myself to myself. That's why "from" isn't senderEmail but my own email instead
    await sgMail.send({
      from: MY_EMAIL,
      to: MY_EMAIL,
      subject: `Portfolio website contact from: ${senderName}`,
      text: `${senderEmail} has sent this message: ${sentMessage}`,
    });
    res.status(201).json({
      status: 'Sucess',
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: 'Failure',
      error: err,
    });
  }
};
