function createMenu() {
	const content = document.querySelector('#content');

	// Create menu 
	const menuTitleCont = document.createElement('div');
    menuTitleCont.classList.add('menu-title-cont');
    content.appendChild(menuTitleCont);

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuTitleCont.appendChild(menuTitle);
}

export default function loadMenu() {
    createMenu();
}
