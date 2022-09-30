/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import menuJSON from './menu.json';
import { elFactory } from './pageFactories';

// Function to build menu items in sections
function buildMenu() {
  // Create menu item section
  function createMenuSec(menuItems) {
    const menuSecCont = document.querySelector('.menu-sec-cont');
    const menuSec = document.createElement('div');
    menuSec.classList.add('menu-sec');
    menuSec.setAttribute('id', menuItems);
    menuSecCont.appendChild(menuSec);
  }

  for (const i in menuJSON.Menu) {
    createMenuSec(`menu-sec-${i}`);
    const secHeaderName = Object.keys(menuJSON.Menu[i]);
    const x = secHeaderName.toString();

    const secHeader = document.createElement('h3');
    secHeader.classList.add('sec-header');
    secHeader.setAttribute('id', `sec-header-${i}`);
    secHeader.innerHTML = secHeaderName;
    const temp = document.getElementById(`menu-sec-${i}`);
    temp.appendChild(secHeader);

    for (const j in menuJSON.Menu[i][x]) {
      const secItemName = Object.keys(menuJSON.Menu[i][x][j]);
      const y = secItemName.toString();

      const secItemDesc = Object.values(menuJSON.Menu[i][x][j]);
      const z = secItemDesc.toString();

      const secItem = document.createElement('div');
      secItem.classList.add('sec-item');
      secItem.setAttribute('id', `menu-sec-item-${j}`);
      secItem.appendChild(document.createTextNode(y));
      temp.appendChild(secItem);

      const itemDesc = document.createElement('div');
      itemDesc.classList.add('item-desc');
      itemDesc.setAttribute('id', `item-desc-${j}`);
      itemDesc.appendChild(document.createTextNode(z));
      temp.appendChild(itemDesc);
    }
  }
}

function createMenu() {
  const content = document.querySelector('#content');

  // Create main container for Menu page
  const menu = elFactory('div', { id: 'menu', class: 'flex-item' });
  content.appendChild(menu);

  // Create menu title inside a container
  const menuTitle = elFactory(
    'div',
    { class: 'title-cont' },
    elFactory('h1', {}, 'Menu')
  );
  menu.appendChild(menuTitle);

  // Create subtitle on menu page
  const menuInfo = elFactory(
    'h6',
    { class: 'menu-info' },
    'Our menu changes weekly and features fresh, locally-sourced ingredients.\n\nHere are our current selections:'
  );
  menu.appendChild(menuInfo);

  // Create container for menu course containers; used for formatting
  const menuSecCont = elFactory('div', { class: 'menu-sec-cont' });
  menu.appendChild(menuSecCont);

  // Create all menu items in sections
  buildMenu();
}

export default function loadMenu() {
  createMenu();
}
