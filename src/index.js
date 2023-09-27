import './style.css';
import ifish from './ifish.png';
import { aboutFunction } from './about.js';
import { contactFunction } from './contact.js';
// eslint-disable-next-line import/named
import { dropDown } from './dropDown.js';

// Create logo element
function logo() {
  // eslint-disable-next-line no-shadow
  const logo = new Image();
  logo.src = ifish;
  logo.setAttribute('id', 'logo');
  return logo;
}

// Create banner elements
function bannerEle() {
  const containing = document.createElement('div');
  containing.setAttribute('class', 'navbuttons');

  const trigger1 = document.createElement('div');
  const home = document.createElement('button');
  home.innerHTML = 'Home';
  trigger1.appendChild(home);
  containing.appendChild(trigger1);

  const trigger2 = document.createElement('div');
  const about = document.createElement('button');
  about.innerHTML = 'About';
  trigger2.appendChild(about);
  containing.appendChild(trigger2);

  const trigger3 = document.createElement('div');
  const portfolio = document.createElement('button');
  portfolio.innerHTML = 'Portfolio';
  portfolio.setAttribute('id', 'portfolioBtn');

  // Grab dropdown from HTML
  const dropdown = document.getElementById('dropdown');
  trigger3.appendChild(portfolio);
  trigger3.appendChild(dropdown);
  containing.appendChild(trigger3);

  const trigger4 = document.createElement('div');
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  trigger4.appendChild(contact);
  containing.appendChild(trigger4);

  return containing;
}

const banner = document.getElementById('banner');
banner.appendChild(logo());
banner.appendChild(bannerEle());

const content = document.getElementById('content');

// Logic for switching page per tab clicked
const refreshpage = (event) => {
  content.setAttribute('class', 'reappear');
  const { target } = event;

  // eslint-disable-next-line eqeqeq
  if (target.textContent === 'About') {
    content.appendChild(aboutFunction());
  } else if (target.textContent === 'Contact') {
    content.appendChild(contactFunction());
  }
};

document.addEventListener('click', (event) => {
  const target = event.target.nodeName;

  // eslint-disable-next-line eqeqeq
  if (target == 'BUTTON') {
    // Remove selected class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.setAttribute('class', '');
    });
    // Set target to selected
    event.target.setAttribute('class', 'selectedBtn');

    content.setAttribute('class', 'disappear');
    setTimeout(() => {
      content.replaceChildren();
      refreshpage(event);
    }, 700);
  }
});

dropDown();
