

// Импорт webpack
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();

 import * as gsapJS from "./modules/gsap.js";

 //accordion
 const tabs = document.querySelectorAll('.vacancy__item');

function toggleTab(event) {
  const clickedTab = event.target.parentNode;
  const isExpanded = clickedTab.classList.contains('expand');

  if (isExpanded) {
    clickedTab.classList.remove('expand');
  } else {
    clickedTab.classList.add('expand');
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', toggleTab);
});

document.addEventListener('DOMContentLoaded', () => {
  tabs.forEach((tab) => tab.classList.remove('expand'));
});