import './style.css';
import pic1 from './stockpic1.jpg';
import pic2 from './stockpic2.jpg';
import pic3 from './stockpic3.jpg';
import pic4 from './stockpic4.jpg';

function loadPics() {
  const imgSlider = document.createElement('div');
  imgSlider.setAttribute('class', 'imgSlider');

  const picture1 = new Image();
  picture1.src = pic1;
  picture1.setAttribute('class', 'lowZ');
  picture1.setAttribute('id', 'pic1');
  imgSlider.appendChild(picture1);

  const picture2 = new Image();
  picture2.src = pic2;
  picture2.setAttribute('class', 'lowZ');
  picture2.setAttribute('id', 'pic2');
  imgSlider.appendChild(picture2);

  const picture3 = new Image();
  picture3.src = pic3;
  picture3.setAttribute('class', 'lowZ');
  picture3.setAttribute('id', 'pic3');
  imgSlider.appendChild(picture3);

  const picture4 = new Image();
  picture4.src = pic4;
  picture4.setAttribute('class', 'highZ');
  picture4.setAttribute('id', 'pic4');
  imgSlider.appendChild(picture4);

  // Left and right buttons
  const left = document.createElement('div');
  left.setAttribute('class', 'left');
  const leftbtn = document.createElement('button');
  left.appendChild(leftbtn);
  imgSlider.appendChild(left);
  const right = document.createElement('div');
  const rightbtn = document.createElement('button');
  right.appendChild(rightbtn);
  right.setAttribute('class', 'right');
  imgSlider.appendChild(right);

  return imgSlider;
}

function homeFunction() {
  const home = document.createElement('div');
  home.setAttribute('class', 'home');
  home.appendChild(loadPics());

  return home;
}

export { homeFunction };
