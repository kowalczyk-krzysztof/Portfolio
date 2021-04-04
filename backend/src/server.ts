import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import path from 'path';
// Routers
import emailRouter from './routes/email';

dotenv.config({ path: 'config.env' }); // exporting environment variables

const app = express();
// Set body parser
app.use(express.json());
app.use(urlencoded({ extended: true }));
// Rate limiting - I only set it for the email route in case I want
const REQUEST_LIMIT = (process.env.SEND_EMAIL_LIMIT as unknown) as number;
const limiter = rateLimit({
  windowMs: 600 * 60 * 100, // 60 minutes
  max: REQUEST_LIMIT, // limit each IP to 3 requests per windowMs
  message: 'Too many requests. Try again in 1 hour',
});
// Enable CORS - this is needed so I can connect with frontend
app.use(cors());
// Set security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", 'https:', 'data:'],
        frameAncestors: ["'self'", 'https://accounts.google.com/'],
        frameSrc: ["'self'", 'https://accounts.google.com/'],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'self'", 'blob:'],
        mediaSrc: ["'self'", 'blob:', 'data:'],
        scriptSrc: ["'self'", 'https://apis.google.com'],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        upgradeInsecureRequests: [],
        'connect-src': ["'self'", 'https://kowalczyk-portfolio.herokuapp.com'],
      },
    },
  })
);
// Set cookie parser
app.use(cookieParser());

// const letsEncryptReponse = process.env.CERTBOT_RESPONSE;

// // Return the Let's Encrypt certbot response:
// app.get('/.well-known/acme-challenge/:content', function (req, res) {
//   res.send(letsEncryptReponse);
// });

// Routers
app.use('/api/v1/email', limiter, emailRouter);

const PORT = ((process.env.PORT as unknown) as number) || 5000;

// Serving react SPA
app.use(express.static(path.join(__dirname, '/../../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../frontend/build/index.html'));
});

app.listen(PORT, (): void => {
  console.log(
    `Server is up and running @ http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
