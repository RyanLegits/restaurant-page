function createMenu() {
	const content = document.querySelector('#content');

    // Push content of tabs (besides 'home') below header
    const subContent = document.createElement('div');
    subContent.classList.add('sub-content');
    content.appendChild(subContent);

    const menuCont = document.createElement('div');
    menuCont.setAttribute('id','menu');
    menuCont.classList.add('flex-item');
    subContent.appendChild(menuCont);

	// Create menu 
	const menuTitleCont = document.createElement('div');
    menuTitleCont.classList.add('menu-title-cont');
    menuCont.appendChild(menuTitleCont);

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuTitleCont.appendChild(menuTitle);
}

export default function loadMenu() {
    createMenu();
}
