// Append html elements to DOM (including: header, hero and info)

// Create background to span header and hero
function createBackground() {
	const content = document.querySelector('#content');

	// Create background container
	const backgroundCont = document.createElement('div');
	backgroundCont.classList.add('background-cont');
	// Add background to background container
	backgroundCont.style.backgroundImage = 'url(../imgFood.jpg)';
	// Keep aspect ratio without image overflow
	backgroundCont.style.backgroundSize = 'cover';
	content.appendChild(backgroundCont);
}

function createHeader() {
	const backgroundCont = document.querySelector('.background-cont');

	// Create header
	const header = document.createElement('div');
	header.classList.add('header');
	backgroundCont.appendChild(header);

	// Create header logo container
    const headerLogoCont = document.createElement('div');
    headerLogoCont.classList.add('header-logo-cont');
    header.appendChild(headerLogoCont);

    // Create header logo
    const headerLogo = document.createElement('h3');
    headerLogo.classList.add('header-logo');
    headerLogo.innerHTML = "Header Logo";
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
    const menuItems = ['one', 'two', 'three'];

    for (let i = 0; i < menuItems.length; i++) {
    	const item = menuItems[i];
    	const navItem = document.createElement('li');
    	navItem.appendChild(document.createTextNode(item));
    	navMenu.appendChild(navItem);
    }
}

function createHero() {
	const backgroundCont = document.querySelector('.background-cont');

	// Create hero
	const hero = document.createElement('div');
	hero.classList.add('hero');
	backgroundCont.appendChild(hero);

	// Create hero text container
	const heroTextCont = document.createElement('div');
    heroTextCont.classList.add('hero-text-cont');
    hero.appendChild(heroTextCont);

    // Create hero title
    const heroTitle = document.createElement('h1');
    heroTitle.appendChild(document.createTextNode('World Restaurant'));
    heroTextCont.appendChild(heroTitle);

    // Create hero sub title
    const heroSub = document.createElement('h6');
    heroSub.appendChild(document.createTextNode("'Cause when you're here, you're a friend!"));
    heroTextCont.appendChild(heroSub);
}

function createInfo() {
	
}

export default function pageLoad() {
	createBackground();
	createHeader();
	createHero();
}
