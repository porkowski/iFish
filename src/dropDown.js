function dropDown() {
  const menu = document.getElementById('dropdown');
  const portfolio = document.getElementById('portfolioBtn');
  portfolio.addEventListener('mouseover', () => {
    menu.setAttribute('class', 'reappear');
  });
  menu.addEventListener('mouseleave', () => {
    menu.setAttribute('class', 'disappear');
  });
}

export { dropDown };
