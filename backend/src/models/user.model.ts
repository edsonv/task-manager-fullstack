import { Document, model, Schema } from 'mongoose';

export interface User extends Document {
  id?: string;
  username: string;
  email: string;
  password?: string;
  createdAt: string;
}

const userSchema = new Schema<User>({
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

export const User = model<User>('User', userSchema);
