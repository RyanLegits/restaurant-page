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

  const contactCont = elFactory('div', { class: 'contact-cont' });
  contact.appendChild(contactCont);

  // Create contact section container
  const contactSecCont = elFactory(
    'div',
    { class: 'contact-sec-cont' },
    elFactory('h6', {}, 'Call Us'),
    elFactory('p', {}, '(555) 642-7878'),
    elFactory('p', {}, '1 (800) 555-7289'),
    elFactory('h6', {}, 'Location'),
    elFactory('p', {}, '4724 Main Street,'),
    elFactory('p', {}, 'Seattle, WA 98104'),
    elFactory('h6', {}, 'Hours'),
    elFactory(
      'div',
      { class: 'sec-hours' },
      elFactory(
        'div',
        { class: 'hours' },
        elFactory('p', {}, 'Monday-Friday'),
        elFactory('p', {}, '8AM-5PM')
      ),
      elFactory(
        'div',
        { class: 'hours' },
        elFactory('p', {}, 'Saturday-Sunday'),
        elFactory('p', {}, '9AM-3PM')
      )
    )
  );
  contactCont.appendChild(contactSecCont);
}

export default function loadContact() {
  createContact();
}
