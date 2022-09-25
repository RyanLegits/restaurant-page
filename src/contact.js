function createContact() {
	const content = document.querySelector('#content');

    const contactCont = document.createElement('div');
    contactCont.setAttribute('id','contact');
    contactCont.classList.add('flex-item');
    content.appendChild(contactCont);

	// Create contact 
	const contactTitleCont = document.createElement('div');
    contactTitleCont.classList.add('contact-title-cont');
    contactCont.appendChild(contactTitleCont);

    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = "Contact";
    contactTitleCont.appendChild(contactTitle);
}

export default function loadContact() {
    createContact();
}
