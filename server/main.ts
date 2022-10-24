import { Meteor } from 'meteor/meteor';
import { TasksCollection, ITask } from '/imports/api/tasks';


const insertTask = (taskText: string) => TasksCollection.insert({text: taskText} as ITask);

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0){
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask);
  }
});