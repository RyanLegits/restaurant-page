import menuJSON from './menu.json';

function createMenu() {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.classList.add('flex-item');
  content.appendChild(menu);

  const menuTitleCont = document.createElement('div');
  menuTitleCont.classList.add('menu-title-cont');
  menu.appendChild(menuTitleCont);

  const menuTitle = document.createElement('h1');
  menuTitle.innerHTML = 'Menu';
  menuTitleCont.appendChild(menuTitle);

  const menuInfo = document.createElement('h6');
  menuInfo.classList.add('menu-info');
  menuInfo.innerHTML =
    'Our menu changes weekly and features fresh, locally-sourced ingredients.<br/><br/>Here are our current selections:';
  menu.appendChild(menuInfo);

  const menuSecCont = document.createElement('div');
  menuSecCont.classList.add('menu-sec-cont');
  menu.appendChild(menuSecCont);

  // Create all menu items in sections
  buildMenu();
}

// Function to build menu items in sections
function buildMenu() {
  console.log(menuJSON);

  // Create menu item section
  function createMenuSec(menuItems) {
    const menuSecCont = document.querySelector('.menu-sec-cont');
    const menuSec = document.createElement('div');
    menuSec.classList.add('menu-sec');
    menuSec.setAttribute('id', menuItems);
    menuSecCont.appendChild(menuSec);
  }

  for (let i in menuJSON['Menu']) {
    createMenuSec(`menu-sec-${i}`);
    const secHeaderName = Object.keys(menuJSON['Menu'][i]);
    const x = secHeaderName.toString();

    const secHeader = document.createElement('h3');
    secHeader.classList.add('sec-header');
    secHeader.setAttribute('id', `sec-header-${i}`);
    secHeader.innerHTML = secHeaderName;
    const temp = document.getElementById(`menu-sec-${i}`);
    temp.appendChild(secHeader);

    for (let j in menuJSON['Menu'][i][x]) {
      const secItemName = Object.keys(menuJSON['Menu'][i][x][j]);
      const y = secItemName.toString();

      const secItemDesc = Object.values(menuJSON['Menu'][i][x][j]);
      const z = secItemDesc.toString();

      const secItem = document.createElement('div');
      secItem.classList.add('sec-item');
      secItem.setAttribute('id', `sec-item-${j}`);
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

export default function loadMenu() {
  createMenu();
}
