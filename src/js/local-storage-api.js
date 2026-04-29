export function getTasksFromLS() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  } catch (error) {
    console.log(error);
  }
}
export function saveTaskToLS(task) {
  const tasks = getTasksFromLS();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function deleteTaskToLS(id) {
  const tasks = getTasksFromLS();
  const newTask = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newTask));
}
export function changeTheme() {
  const THEME_KEY = 'theme';

  const themeNow = localStorage.getItem(THEME_KEY);
  const theme = themeNow || 'theme-light';
  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(theme);
  if (!themeNow) {
    localStorage.setItem(THEME_KEY, theme);
  }
}
