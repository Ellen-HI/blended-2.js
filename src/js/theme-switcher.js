import { changeTheme } from './local-storage-api';

export function handleThemeBtn() {
  const themeDark = document.body.classList.contains('theme-dark');
  if (themeDark) {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    localStorage.setItem('theme', 'theme-light');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  }

  changeTheme();
}
