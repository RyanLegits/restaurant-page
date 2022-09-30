import { elFactory } from './pageFactories';

function createFooter() {
  const content = document.querySelector('#content');

  // Create footer
  const footer = elFactory(
    'div',
    { class: 'footer' },
    '\u00A9 Copyright 2022 World Restaurant'
  );
  content.appendChild(footer);
}

export default function loadFooter() {
  createFooter();
}
