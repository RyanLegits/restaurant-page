(() => {
  'use strict';
  var e = {
    d: (t, n) => {
      for (var a in n)
        e.o(n, a) &&
          !e.o(t, a) &&
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  e.d({}, { Z: () => s });
  const t = (e, t, ...n) => {
      const a = document.createElement(e);
      for (const e in t) a.setAttribute(e, t[e]);
      return (
        n.forEach((e) => {
          'string' == typeof e
            ? a.appendChild(document.createTextNode(e))
            : a.appendChild(e);
        }),
        a
      );
    },
    n = JSON.parse(
      '{"v":[{"Salad":[{"Luang Prabang Salad":"Laos salad with hard-boiled egg, watercress, peanuts and cilantro served on a bed of mixed greens and accompanied by a traditional Lao dressing"},{"Christmas Salad":"An Icelandic favorite with redd cabbage, red currant jelly, apricot preserves and fresh lemon juice"}]},{"Appetizer":[{"Solterito":"Peruvian chopped salad with corn, edamame, red onions, cherry tomatoes, feta, jalapeño, olives, salt, pepper, and cilantro"},{"Tarteletter":"From Denmark, puff pastry tartlets filled with chicken and asparagus sauce"}]},{"Entrée":[{"Liboke":"Congolese boiled fish with tomato and chile, wrapped in banana leaves and grilled with a house blend of spices"},{"Oil Down":"The national dish of Granada consisting of vegetables, starchy tubers, green bananas, chicken and pigtails"}]},{"Dessert":[{"Breskvice":"Croatian peach shaped Christmas cookies with chocolate filling"},{"Kue Mangkok":"Traditional steamed cupcakes from Brunei flavored with tapai (fermented cassava)"}]}]}'
    );
  const a = document.querySelectorAll('[data-tab]'),
    o = document.getElementsByClassName('active');
  function s() {
    if (!this.classList.contains('active')) {
      Array.from(o).forEach((e) => {
        e.classList.remove('active');
      }),
        this.classList.add('active');
      const e = this.getAttribute('data-tab');
      document.getElementById(e).classList.add('active');
    }
  }
  Array.from(a).forEach((e) => {
    e.addEventListener('click', s);
  }),
    (function () {
      const e = document.querySelector('#content'),
        n = t('div', { class: 'header' });
      e.appendChild(n);
      const a = t(
        'div',
        { class: 'header-logo-cont' },
        t('h3', { class: 'header-logo' }, 'WR')
      );
      n.appendChild(a);
      const o = t('div', { class: 'header-nav-cont' });
      n.appendChild(o);
      const c = t('ul', { class: 'nav-menu' });
      o.appendChild(c);
      const i = ['Home', 'Menu', 'Contact'];
      for (let e = 0; e < i.length; e += 1) {
        const n = i[e],
          a = document.createElement('li');
        a.setAttribute('data-tab', n.toLowerCase()),
          a.addEventListener('click', s),
          c.appendChild(a);
        const o = t('a', { href: '#' }, `${n}`);
        a.appendChild(o);
      }
    })(),
    (function () {
      const e = document.querySelector('#content'),
        n = document.createElement('div');
      n.setAttribute('id', 'home'),
        n.classList.add('flex-item', 'active'),
        e.appendChild(n),
        (function () {
          const e = t('div', { class: 'background-cont' });
          n.appendChild(e);
        })(),
        (function () {
          const e = document.querySelector('.background-cont'),
            n = t(
              'div',
              { class: 'hero' },
              t(
                'div',
                { class: 'hero-text-cont' },
                t('h1', {}, 'World Restaurant'),
                t('h6', {}, "'Cause when you're here, you're a friend!")
              )
            );
          e.appendChild(n);
        })(),
        (function () {
          const e = t('div', { class: 'info' });
          n.appendChild(e);
          const a = t(
            'div',
            { class: 'info-text-cont' },
            'At World Restaurant we strive to bring together the most delectable cuisine from every corner of the world! Our head chef Gordon Alléno has studied cuisine on every continent, working with renowned chefs in France, Peru, South Africa, the United States, and Thailand. Alléno brings all his knowledge together to create both traditional recipes and fusion creations. Here at World Restaurant, we truly believe that every culture is beautiful (and tasty)!\n\nEnjoy the ambiance with cultural architecture from around the world, as well as contemporary art contrasting ancient relics that will make your meal an experience. Our waiters are knowledgeable in the history of every cultural piece or symbol in our restaurant. Experience a tour of the World while enjoying the cuisine that it has created.\n\nWelcome to World Restaurant!'
          );
          e.appendChild(a);
          const o = t(
            'div',
            { class: 'info-image-cont' },
            t('img', {
              class: 'info-image',
              src: '../dist/assets/images/infoImage.jpg',
            })
          );
          e.appendChild(o);
        })();
    })(),
    (function () {
      const e = document.querySelector('#content'),
        a = t('div', { id: 'menu', class: 'flex-item' });
      e.appendChild(a);
      const o = t('div', { class: 'title-cont' }, t('h1', {}, 'Menu'));
      a.appendChild(o);
      const s = t(
        'h6',
        { class: 'menu-info' },
        'Our menu changes weekly and features fresh, locally-sourced ingredients.\n\nHere are our current selections:'
      );
      a.appendChild(s);
      const c = t('div', { class: 'menu-sec-cont' });
      a.appendChild(c),
        (function () {
          function e(e) {
            const n = document.querySelector('.menu-sec-cont'),
              a = t('div', { id: e, class: 'menu-sec' });
            n.appendChild(a);
          }
          for (const a in n.v) {
            e(`menu-sec-${a}`);
            const o = Object.keys(n.v[a]),
              s = o.toString(),
              c = document.getElementById(`menu-sec-${a}`),
              i = t(
                'h3',
                { id: `sec-header-${a}`, class: 'sec-header' },
                `${o}`
              );
            c.appendChild(i);
            for (const e in n.v[a][s]) {
              const o = Object.keys(n.v[a][s][e]).toString(),
                i = Object.values(n.v[a][s][e]).toString(),
                r = t(
                  'div',
                  { id: `menu-sec-item-${e}`, class: 'sec-item' },
                  `${o}`
                );
              c.appendChild(r);
              const d = t(
                'div',
                { id: `item-desc-${e}`, class: 'item-desc' },
                `${i}`
              );
              c.appendChild(d);
            }
          }
        })();
    })(),
    (function () {
      const e = document.querySelector('#content'),
        n = t('div', { id: 'contact', class: 'flex-item' });
      e.appendChild(n);
      const a = t('div', { class: 'title-cont' }, t('h1', {}, 'Contact'));
      n.appendChild(a);
      const o = t('div', { class: 'contact-cont' });
      n.appendChild(o);
      const s = t(
        'div',
        { class: 'contact-sec-cont' },
        t('h6', {}, 'Call Us'),
        t('p', {}, '(555) 642-7878'),
        t('p', {}, '1 (800) 555-7289'),
        t('h6', {}, 'Location'),
        t('p', {}, '4724 Main Street,'),
        t('p', {}, 'Seattle, WA 98104'),
        t('h6', {}, 'Hours'),
        t(
          'div',
          { class: 'sec-hours' },
          t(
            'div',
            { class: 'hours' },
            t('p', {}, 'Monday-Friday'),
            t('p', {}, '8AM-5PM')
          ),
          t(
            'div',
            { class: 'hours' },
            t('p', {}, 'Saturday-Sunday'),
            t('p', {}, '9AM-3PM')
          )
        )
      );
      o.appendChild(s);
    })(),
    (function () {
      const e = document.querySelector('#content'),
        n = t('div', { class: 'footer' }, '© Copyright 2022 World Restaurant');
      e.appendChild(n);
    })();
})();
