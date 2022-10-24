import { Mongo } from 'meteor/mongo';

export interface ITask {
  _id?: string;
  text: string;
  isChecked: boolean
}

export const TasksCollection = new Mongo.Collection('tasks');