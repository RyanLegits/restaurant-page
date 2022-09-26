import loadHeader from './header';
import loadHome from './pageLoad';
import loadMenu from './menu';
import loadContact from './contact';
import loadFooter from './footer'

// Handle tabbed browsing
const tabs = document.querySelectorAll('[data-tab]');
const pageContent = document.getElementsByClassName('active');

export function togglePageContent() {
	if (!this.classList.contains("active")) {
		Array.from(pageContent).forEach( item => {
			item.classList.remove('active');
		});

		this.classList.add('active');

		let currentTab = this.getAttribute('data-tab'),
		tabContent = document.getElementById(currentTab);
		tabContent.classList.add('active');
	}
}

Array.from(tabs).forEach( item => {
	item.addEventListener('click', togglePageContent);
});

loadHeader();
loadHome();
loadMenu();
loadContact();
loadFooter();
