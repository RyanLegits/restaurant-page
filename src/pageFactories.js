/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
// Page building factories

// DOM element factory
export const elFactory = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
};

// Use template
// const elName = elFactory(
//   'div',
//   { class: 'my-component' },
//   elFactory('span', {}, 'Hello World!'),
//   ' String as textNode '
// )

// document.body.appendChild(elName)
