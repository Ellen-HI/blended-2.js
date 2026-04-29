import { nanoid } from 'nanoid';
import {
  deleteTaskToLS,
  getTasksFromLS,
  saveTaskToLS,
} from './local-storage-api';
import { addTaskList } from './render-tasks';
import { refs } from './refs';
export function handleHeaderFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    console.log('input is empty!');
    return;
  }
  const task = {
    id: nanoid(),
    name: taskNameValue,
    desc: taskDescriptionValue,
  };
  saveTaskToLS(task);
  addTaskList(task);
  event.target.reset();
}
export function handleDelete(event) {
  const btn = event.target.classList.contains('task-list-item-btn');
  const itemDelete = event.target.closest('.task-list-item');
  const id = event.target.dataset.id;
  if (!btn) {
    return;
  } else {
    itemDelete.remove();
    deleteTaskToLS(id);
  }
}

const tasks = getTasksFromLS();

tasks.forEach(task => addTaskList(task));
