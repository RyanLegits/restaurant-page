function createContact() {
	const content = document.querySelector('#content');

	// Create contact 
	const contactTitleCont = document.createElement('div');
    contactTitleCont.classList.add('contact-title-cont');
    content.appendChild(contactTitleCont);

    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = "Contact";
    contactTitleCont.appendChild(contactTitle);
}

export default function loadContact() {
    createContact();
}
