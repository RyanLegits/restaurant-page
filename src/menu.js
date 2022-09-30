/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import menuJSON from './menu.json';
import { elFactory } from './pageFactories';

// Function to build menu items in sections
function buildMenu() {
  // Create menu item section
  function createMenuSec(menuItems) {
    const menuSecCont = document.querySelector('.menu-sec-cont');

    // Create menu section
    const menuSec = elFactory('div', { id: menuItems, class: 'menu-sec' });
    menuSecCont.appendChild(menuSec);
  }

  for (const i in menuJSON.Menu) {
    createMenuSec(`menu-sec-${i}`);
    const secHeaderName = Object.keys(menuJSON.Menu[i]);
    const x = secHeaderName.toString();
    const temp = document.getElementById(`menu-sec-${i}`);

    // Create section header
    const secHeader = elFactory(
      'h3',
      { id: `sec-header-${i}`, class: 'sec-header' },
      `${secHeaderName}`
    );
    temp.appendChild(secHeader);

    for (const j in menuJSON.Menu[i][x]) {
      const secItemName = Object.keys(menuJSON.Menu[i][x][j]);
      const y = secItemName.toString();

      const secItemDesc = Object.values(menuJSON.Menu[i][x][j]);
      const z = secItemDesc.toString();

      // Create section item
      const secItem = elFactory(
        'div',
        { id: `menu-sec-item-${j}`, class: 'sec-item' },
        `${y}`
      );
      temp.appendChild(secItem);

      // Create item description
      const itemDesc = elFactory(
        'div',
        { id: `item-desc-${j}`, class: 'item-desc' },
        `${z}`
      );
      temp.appendChild(itemDesc);
    }
  }
}

function createMenu() {
  const content = document.querySelector('#content');

  // Create Menu page
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
