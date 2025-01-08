import jwt from 'jsonwebtoken';
import { IncomingMessage } from 'node:http';
import { User } from '../models/user.model';

type Context = {
  req: IncomingMessage;
};
export const checkAuth = (context: Context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);

        return user as User;
      } catch (err) {
        throw new Error('Invalid/Expired token');
      }
    }

    throw new Error("Authentication token must be 'Bearer [token]");
  }

  throw new Error('Authentication header must be provided');
};
