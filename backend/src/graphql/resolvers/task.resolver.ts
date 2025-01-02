import { Task } from '../../models/task.model';

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
};
