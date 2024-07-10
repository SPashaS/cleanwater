// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, menuOpen } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';


const menuList = document.querySelector('.menu__list');
if(menuList) {
  const items = menuList.querySelectorAll('.menu-item a')
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      menuClose();
    })
  });
}