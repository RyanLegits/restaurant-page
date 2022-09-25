import loadHeader from './header';
import loadHome from './pageLoad';
import loadMenu from './menu';
import loadContact from './contact';

// Handle tabbed browsing
const tabs = document.querySelectorAll('[data-tab]');
const content = document.getElementsByClassName('active');

export function toggleContent() {
	if (!this.classList.contains("active")) {
		Array.from(content).forEach( item => {
			item.classList.remove('active');
		});

		this.classList.add('active');

		let currentTab = this.getAttribute('data-tab'),
		tabContent = document.getElementById(currentTab);
		tabContent.classList.add('active');
	}
}

Array.from(tabs).forEach( item => {
	item.addEventListener('click', toggleContent);
});

loadHeader();
loadHome();
loadMenu();
loadContact();
