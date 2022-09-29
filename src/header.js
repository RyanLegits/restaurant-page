import togglePageContent from './index';

function createHeader() {
  const content = document.querySelector('#content');

  // Create header
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);

  // Create header logo container
  const headerLogoCont = document.createElement('div');
  headerLogoCont.classList.add('header-logo-cont');
  header.appendChild(headerLogoCont);

  // Create header logo
  const headerLogo = document.createElement('h3');
  headerLogo.classList.add('header-logo');
  headerLogo.innerHTML = 'WR';
  headerLogoCont.appendChild(headerLogo);

  // Create header navigation container
  const headerNavCont = document.createElement('div');
  headerNavCont.classList.add('header-nav-cont');
  header.appendChild(headerNavCont);

  // Create nav menu
  const navMenu = document.createElement('ul');
  navMenu.classList.add('nav-menu');
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

    const navLink = document.createElement('a');
    navLink.setAttribute('href', '#');
    navLink.appendChild(document.createTextNode(item));
    navItem.appendChild(navLink);
  }
}

export default function loadHeader() {
  createHeader();
}
