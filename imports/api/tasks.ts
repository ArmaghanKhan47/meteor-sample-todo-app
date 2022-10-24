import { Mongo } from 'meteor/mongo';

export interface ITask {
  _id?: number;
  text: string;
}

export const TasksCollection = new Mongo.Collection('tasks');