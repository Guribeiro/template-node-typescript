import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from './errors/AppError';

import routes from './routes';

const port = process.env.PORT ?? 3333;

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(port, () => console.log(`server is running on port ${port}`));
