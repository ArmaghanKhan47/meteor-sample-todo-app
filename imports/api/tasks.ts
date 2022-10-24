export interface ITask {
  _id?: number;
  text: string;
}

export const TasksCollection: Array<ITask> = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
];