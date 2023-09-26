import './style.css';

function contactFunction() {
  const contactParagraph = document.createElement('div');
  contactParagraph.setAttribute('class', 'contact');

  const p1 = document.createElement('p');
  p1.innerHTML =
    'IFish is always eager to take on new work and help you through challenges. Do you have a project that you would like us to build out? Please reach out below and we will contact you as soon as possible.';
  contactParagraph.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = '';
  contactParagraph.appendChild(p2);

  const p3 = document.createElement('p');
  p3.setAttribute('id', 'phone');
  p3.innerHTML = '347-760-8102';
  contactParagraph.appendChild(p3);

  const p4 = document.createElement('p');
  p4.setAttribute('id', 'email');
  p4.innerHTML = 'Brianzx10@gmail.com';
  contactParagraph.appendChild(p4);

  const p5 = document.createElement('div');
  p5.setAttribute('id', 'map');
  p5.innerHTML = '';
  contactParagraph.appendChild(p4);

  return contactParagraph;
}

export { contactFunction };
