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
    const backgroundCont = document.createElement('div');
    backgroundCont.classList.add('background-cont');
    // Add background to background container
    backgroundCont.style.backgroundImage = 'url(../imgFood.jpg)';
    // Keep aspect ratio without image overflow
    backgroundCont.style.backgroundSize = 'cover';
    homeCont.appendChild(backgroundCont);
  }

  function createHero() {
    const backgroundCont = document.querySelector('.background-cont');

    // Create hero
    const hero = document.createElement('div');
    hero.classList.add('hero');
    backgroundCont.appendChild(hero);

    // Create hero text container
    const heroTextCont = document.createElement('div');
    heroTextCont.classList.add('hero-text-cont');
    hero.appendChild(heroTextCont);

    // Create hero title
    const heroTitle = document.createElement('h1');
    heroTitle.appendChild(document.createTextNode('World Restaurant'));
    heroTextCont.appendChild(heroTitle);

    // Create hero sub title
    const heroSub = document.createElement('h6');
    heroSub.appendChild(
      document.createTextNode("'Cause when you're here, you're a friend!")
    );
    heroTextCont.appendChild(heroSub);
  }

  function createInfo() {
    // Create info
    const info = document.createElement('div');
    info.classList.add('info');

    // Create info text container
    const infoTextCont = document.createElement('div');
    infoTextCont.classList.add('info-text-cont');
    info.appendChild(infoTextCont);
    // Add info paragraphs with breaks
    infoTextCont.appendChild(
      document.createTextNode(
        'At World Restaurant we strive to bring together the most delectable cuisine from every corner of the world! Our head chef Gordon Alléno has studied cuisine on every continent, working with renowned chefs in France, Peru, South Africa, the United States, and Thailand. Alléno brings all his knowledge together to create both traditional recipes and fusion creations. Here at World Restaurant, we truly believe that every culture is beautiful (and tasty)!\n\nEnjoy the ambiance with cultural architecture from around the world, as well as contemporary art contrasting ancient relics that will make your meal an experience. Our waiters are knowledgeable in the history of every cultural piece or symbol in our restaurant. Experience a tour of the World while enjoying the cuisine that it has created.\n\nWelcome to World Restaurant!'
      )
    );

    // Create info image containter
    const infoImageCont = document.createElement('div');
    infoImageCont.classList.add('info-image-cont');
    info.appendChild(infoImageCont);
    // Add info image
    const infoImage = document.createElement('img');
    infoImage.classList.add('info-image');
    infoImage.setAttribute('src', '../infoImage.jpg');
    infoImageCont.appendChild(infoImage);

    homeCont.appendChild(info);
  }

  createBackground();
  createHero();
  createInfo();
}

export default function loadHome() {
  createHome();
}
