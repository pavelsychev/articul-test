

// Импорт webpack
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();

 import * as gsapJS from "./modules/gsap.js";

 //accordion
 const tabs = document.querySelectorAll('.vacancy__item');

const reset = () => tabs.forEach((tab) => tab.classList.remove('expand'));

function activate(e) {
  if (!e.target.matches('.vacancy__title')) return;
  reset();
  tabs[e.target.dataset.index].classList.add('expand');
}

const init = () => tabs[0].classList.add('expand');

window.addEventListener('load',init,false);
window.addEventListener('click',activate,false);