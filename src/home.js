function createHome() {
	// Append html elements to DOM (including: header, hero and info)
	const content = document.querySelector('#content');

	const homeCont = document.createElement('div');
	homeCont.setAttribute('id', 'home');
	homeCont.classList.add('flex-item', 'active');
	content.appendChild(homeCont);

	// Create background to span header and hero
	function createBackground() {
		// Create background container
		const backgroundCont = document.createElement('div');
		backgroundCont.classList.add('background-cont');
		// Add background to background container
		backgroundCont.style.backgroundImage = 'url(../imgFood.jpg)';
		// Keep aspect ratio without image overflow
		backgroundCont.style.backgroundSize = 'cover';
		homeCont.appendChild(backgroundCont);
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
	    // Add info image
	    const infoImage = document.createElement('img');
	    infoImage.classList.add('info-image');
	    infoImage.setAttribute('src', '../infoImage.jpg');
	    infoImageCont.appendChild(infoImage);

	    homeCont.appendChild(info);
	}

	createBackground();
	createHero();
	createInfo();
}

export default function loadHome() {
	createHome();
}
