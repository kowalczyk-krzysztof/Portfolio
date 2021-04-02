import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
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
  windowMs: 60 * 60 * 100, // 60 minutes
  max: REQUEST_LIMIT, // limit each IP to 3 requests per windowMs
  message: 'Too many requests. Try again in 1 hour',
});
// Enable CORS - this is needed so I can connect with frontend
app.use(cors());
// Set security headers
app.use(helmet());
// Set cookie parser
app.use(cookieParser());

// Routers
app.use('/api/v1/email', limiter, emailRouter);

const PORT = ((process.env.PORT as unknown) as number) || 5000;

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static('/frontend/build'));
}

app.listen(PORT, (): void => {
  console.log(
    `Server is up and running @ http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
