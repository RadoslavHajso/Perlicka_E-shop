// LANG
const lang = document.querySelector('html').getAttribute('lang');

let langText = 'SK';
if (lang === 'cs') langText = 'CZ';
else if (lang === 'hu') langText = 'HU';

const langToggle = `
  <div class="header-lang">
      <button class="header-lang__button --${lang}">${langText}</button>
      <ul class="header-lang__list">
          <li class="header-lang__item"><a class="header-lang__link --cs" href="https://569739.myshoptet.com/">CZ</a></li>
          <li class="header-lang__item"><a class="header-lang__link --sk" href="https://569738.myshoptet.com/">SK</a></li>
          <li class="header-lang__item"><a class="header-lang__link --hu" href="https://www.perlicka.hu/">HU</a></li>
      </ul>
  </div>
`;

const topNavMenu = document.querySelector('.top-navigation-bar-menu');

if (topNavMenu) {
	topNavMenu.insertAdjacentHTML('afterend', langToggle)
}

const langBtn = document.querySelector('.header-lang__button');
const langList = document.querySelector('.header-lang__list');

if (langBtn && langList) {
  langBtn.addEventListener('click', () => {
    langBtn.classList.toggle('--active');
    langList.classList.toggle('--active');
  });
}