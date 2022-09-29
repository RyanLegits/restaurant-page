function createFooter() {
  const content = document.querySelector('#content');

  // Create footer
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.innerHTML = '&copy; Copyright 2022 World Restaurant';
  content.appendChild(footer);
}

export default function loadFooter() {
  createFooter();
}
