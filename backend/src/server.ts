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
// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 100, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
// Enable CORS - this is needed so I can connect with frontend
app.use(cors());
// Set security headers
app.use(helmet());
// Set cookie parser
app.use(cookieParser());

// Routers
app.use('/api/v1/email', emailRouter);

const PORT = ((process.env.PORT as unknown) as number) || 5000;

app.listen(PORT, (): void => {
  console.log(
    `Server is up and running @ http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
