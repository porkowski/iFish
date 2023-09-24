import "./style.css";
import ifish from "./ifish.png";
import {aboutFunction} from './about.js';

//Create logo element
function logo() {
  const logo = new Image();
  logo.src = ifish;
  logo.setAttribute("id", "logo");
  return logo;
}

//Create banner elements
function bannerEle() {
  const containing = document.createElement("div");
  containing.setAttribute("class", "navbuttons");

  const home = document.createElement("button");
  home.innerHTML = "Home";
  containing.appendChild(home);

  const about = document.createElement("button");
  about.innerHTML = "About";
  containing.appendChild(about);

  const portfolio = document.createElement("button");
  portfolio.innerHTML = "Portfolio";
  containing.appendChild(portfolio);

  const contact = document.createElement("button");
  contact.innerHTML = "Contact";
  containing.appendChild(contact);

  return containing;
}

const banner = document.getElementById("banner");
banner.appendChild(logo());
banner.appendChild(bannerEle());


const content = document.getElementById('content');

//Logic for switching page per tab clicked
const refreshpage = (event) => {
    content.setAttribute('class','reappear');
    const target = event.target;
     if (target.textContent == 'About') {
        content.appendChild(aboutFunction());
  }

}

document.addEventListener('click',(event) => {
  const target = event.target.nodeName;

  if (target == 'BUTTON') {
      content.setAttribute('class','disappear');
      setTimeout(() => {
          content.replaceChildren();
          refreshpage(event);
      }, 1300);

  };
})