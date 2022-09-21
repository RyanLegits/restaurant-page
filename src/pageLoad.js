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
	const content = document.querySelector('#content');

	// Create info
	const info = document.createElement('div');
	info.classList.add('info');

	// Create info text container
	const infoTextCont = document.createElement('div');
    infoTextCont.classList.add('info-text-cont');
    info.appendChild(infoTextCont);
    // Add info paragraphs with breaks
    infoTextCont.appendChild(document.createTextNode('Nulla suscipit est ut lorem vestibulum semper. In at suscipit eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacinia massa vitae tellus malesuada, et tristique libero egestas. Fusce dictum ac eros at posuere. Nam pretium quam maximus tincidunt porttitor. Sed a massa nec tortor elementum lobortis sit amet quis lorem. Cras mi dui, gravida et massa vel, imperdiet semper odio.\n\nNullam sodales ante sed purus finibus, non vulputate massa scelerisque. Suspendisse posuere leo nibh, sit amet consequat sapien interdum in. Proin pellentesque, velit at tincidunt luctus, ligula massa rhoncus nunc, vitae egestas purus justo sed elit. Mauris ante eros, rutrum sed sodales quis, posuere eu justo. Nulla vitae posuere nisi. Nullam id metus iaculis, sodales leo auctor, rutrum ipsum. Maecenas scelerisque nec dui egestas lacinia. Duis hendrerit, urna non pulvinar convallis, mi sapien mattis lacus, at tincidunt ligula urna in sapien. Quisque sit amet ipsum ac arcu egestas luctus non sed turpis.'));

    // Create info image containter
    const infoImageCont = document.createElement('div');
    infoImageCont.classList.add('info-image-cont');
    info.appendChild(infoImageCont);
    /// Add info image
    const infoImage = document.createElement('img');
    infoImage.classList.add('info-image');
    infoImage.setAttribute('src', '../infoImage.jpg');
    infoImageCont.appendChild(infoImage);

    content.appendChild(info);
}

export default function pageLoad() {
	createBackground();
	createHeader();
	createHero();
	createInfo();
}
