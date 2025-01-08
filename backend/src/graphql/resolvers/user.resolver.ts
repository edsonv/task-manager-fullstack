import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../../models/user.model';

type RegisterInput = User & {
  confirmPassword: string;
};

function generateToken({ id, email, password }: Partial<User>) {
  return jwt.sign(
    {
      id,
      email,
      password,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

export const userResolver = {
  Mutation: {
    login: async (_: any, { username, password }: Partial<User>) => {
      const user = await User.findOne({ username }).lean();

      if (!user) {
        throw new Error('User not found.');
      }

      const match = await bcrypt.compare(password!, user?.password!);

      if (!match) {
        throw new Error('Wrong credentials.');
      }

      const token = generateToken(user);

      return {
        ...user,
        id: user?._id,
        token,
      };
    },
    register: async (
      _: any,
      { username, email, password, confirmPassword }: RegisterInput
    ) => {
      const user = await User.findOne({ username });

      if (user) {
        throw new Error('User already exist.');
      }

      password = (await bcrypt.hash(password!, 12)) as unknown as string;

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        id: res._id,
        username: res.username,
        email: res.email,
        token,
        createdAt: res.createdAt,
      };
    },
  },
};
