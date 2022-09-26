function createContact() {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.setAttribute('id','contact');
    contact.classList.add('flex-item');
    content.appendChild(contact);

    // Create contact 
    const contactTitleCont = document.createElement('div');
    contactTitleCont.classList.add('contact-title-cont');
    contact.appendChild(contactTitleCont);

    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = "Contact";
    contactTitleCont.appendChild(contactTitle);
}

export default function loadContact() {
    createContact();
}
