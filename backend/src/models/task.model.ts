import mongoose, { model, Schema } from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  isCompleted: Boolean,
  isImportant: Boolean,
  createdAt: String,
  updatedAt: String,
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

export const Task = model('Task', taskSchema);
