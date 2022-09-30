/* eslint-disable import/no-cycle */
import { elFactory } from './pageFactories';
import togglePageContent from './index';

function createHeader() {
  const content = document.querySelector('#content');

  // Create header
  const header = elFactory('div', { class: 'header' });
  content.appendChild(header);

  // Create header logo inside a container
  const headerLogoCont = elFactory(
    'div',
    { class: 'header-logo-cont' },
    elFactory('h3', { class: 'header-logo' }, 'WR')
  );
  header.appendChild(headerLogoCont);

  // Create header nav container
  const headerNavCont = elFactory('div', { class: 'header-nav-cont' });
  header.appendChild(headerNavCont);

  const navMenu = elFactory('ul', { class: 'nav-menu' });
  headerNavCont.appendChild(navMenu);

  // Create nav menu items

  // To add a menu item to page, add it to the list here
  const menuItems = ['Home', 'Menu', 'Contact'];

  for (let i = 0; i < menuItems.length; i += 1) {
    const item = menuItems[i];
    const navItem = document.createElement('li');
    navItem.setAttribute('data-tab', item.toLowerCase());
    navItem.addEventListener('click', togglePageContent);
    navMenu.appendChild(navItem);

    const navLink = elFactory('a', { href: '#' }, `${item}`);
    navItem.appendChild(navLink);
  }
}

export default function loadHeader() {
  createHeader();
}
