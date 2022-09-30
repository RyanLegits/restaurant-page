/* eslint-disable import/no-cycle */
import loadHeader from './header';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import loadFooter from './footer';

// Handle tabbed browsing
const tabs = document.querySelectorAll('[data-tab]');
const pageContent = document.getElementsByClassName('active');

export default function togglePageContent() {
  if (!this.classList.contains('active')) {
    Array.from(pageContent).forEach((item) => {
      item.classList.remove('active');
    });

    this.classList.add('active');

    const currentTab = this.getAttribute('data-tab');
    const tabContent = document.getElementById(currentTab);
    tabContent.classList.add('active');
  }
}

Array.from(tabs).forEach((item) => {
  item.addEventListener('click', togglePageContent);
});

loadHeader();
loadHome();
loadMenu();
loadContact();
loadFooter();
