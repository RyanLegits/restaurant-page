/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
// Page building factories

// DOM element factory
export const elementFactory = (type, attributes, ...children) => {
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
