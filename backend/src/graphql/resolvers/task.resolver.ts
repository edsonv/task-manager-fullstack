import { IncomingMessage } from 'node:http';
import { Task } from '../../models/task.model';
import { checkAuth } from '../../utils/check-auth';

type Task = {
  title: string;
  description?: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
};

export const taskResolver = {
  Query: {
    getTasks: async () => {
      try {
        const tasks = await Task.find();

        return tasks;
      } catch (err: any) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createTask: async (
      _: any,
      { title, description, date, isCompleted, isImportant }: Partial<Task>,
      context: { req: IncomingMessage }
    ) => {
      const user = checkAuth(context);

      const newTask = new Task({
        title,
        description,
        date,
        isCompleted,
        isImportant,
        userId: user.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      const task = await newTask.save();
      return task;
    },
  },
};
