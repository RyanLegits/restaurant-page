function createMenu() {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.setAttribute('id','menu');
    menu.classList.add('flex-item');
    content.appendChild(menu);

    // Create menu 
    const menuTitleCont = document.createElement('div');
    menuTitleCont.classList.add('menu-title-cont');
    menu.appendChild(menuTitleCont);

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuTitleCont.appendChild(menuTitle);
}

export default function loadMenu() {
    createMenu();
}
