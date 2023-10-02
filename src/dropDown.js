function dropDown() {
  const menu = document.getElementById('dropdown');
  const portfolio = document.getElementById('portfolioBtn');
  const navbuttons = document.querySelector('.navbuttons');
  portfolio.addEventListener('mouseover', () => {
    menu.setAttribute('class', 'reappear');
  });

  navbuttons.childNodes[2].addEventListener('mouseleave', () => {
    menu.setAttribute('class', 'disappear');
  });
}

export { dropDown };
