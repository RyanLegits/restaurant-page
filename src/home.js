import { elFactory } from './pageFactories';

function createHome() {
  // Append html elements to DOM (including: header, hero and info)
  const content = document.querySelector('#content');

  const homeCont = document.createElement('div');
  homeCont.setAttribute('id', 'home');
  homeCont.classList.add('flex-item', 'active');
  content.appendChild(homeCont);

  // Create background to span header and hero
  function createBackground() {
    // Create background container
    const backgroundCont = elFactory('div', { class: 'background-cont' });
    homeCont.appendChild(backgroundCont);
  }

  function createHero() {
    const backgroundCont = document.querySelector('.background-cont');

    // Create hero
    const hero = elFactory(
      'div',
      { class: 'hero' },
      // Create hero text container
      elFactory(
        'div',
        { class: 'hero-text-cont' },
        // Create hero title
        elFactory('h1', {}, 'World Restaurant'),
        // Create hero subtitle
        elFactory('h6', {}, "'Cause when you're here, you're a friend!")
      )
    );
    backgroundCont.appendChild(hero);
  }

  function createInfo() {
    // Create info
    const info = elFactory('div', { class: 'info' });
    homeCont.appendChild(info);

    // Create info text in a container
    const infoTextCont = elFactory(
      'div',
      { class: 'info-text-cont' },
      'At World Restaurant we strive to bring together the most delectable cuisine from every corner of the world! Our head chef Gordon Alléno has studied cuisine on every continent, working with renowned chefs in France, Peru, South Africa, the United States, and Thailand. Alléno brings all his knowledge together to create both traditional recipes and fusion creations. Here at World Restaurant, we truly believe that every culture is beautiful (and tasty)!\n\nEnjoy the ambiance with cultural architecture from around the world, as well as contemporary art contrasting ancient relics that will make your meal an experience. Our waiters are knowledgeable in the history of every cultural piece or symbol in our restaurant. Experience a tour of the World while enjoying the cuisine that it has created.\n\nWelcome to World Restaurant!'
    );
    info.appendChild(infoTextCont);

    // Create info image inside a container
    const infoImageCont = elFactory(
      'div',
      { class: 'info-image-cont' },
      elFactory('img', {
        class: 'info-image',
        src: '../src/images/infoImage.jpg',
      })
    );
    info.appendChild(infoImageCont);
  }

  createBackground();
  createHero();
  createInfo();
}

export default function loadHome() {
  createHome();
}
