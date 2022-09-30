import { elFactory } from './pageFactories';

function createContact() {
  const content = document.querySelector('#content');

  // Create Contact page
  const contact = elFactory('div', { id: 'contact', class: 'flex-item' });
  content.appendChild(contact);

  // Create contact title container with title
  const contactTitleCont = elFactory(
    'div',
    { class: 'title-cont' },
    elFactory('h1', {}, 'Contact')
  );
  contact.appendChild(contactTitleCont);
}

export default function loadContact() {
  createContact();
}
