/// Function to return which image number is currently showing
function findPicNum(album) {
  let number = '';
  album.forEach((image) => {
    if (image.getAttribute('class') === 'highZ') {
      number = image.getAttribute('id').slice(3);
    }
  });
  return number;
}

// finds picture nubmer of current image

function imgSliderNext() {
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  const trackingDiv = document.querySelector('.trackingDots');
  const dots = trackingDiv.querySelectorAll('div');
  // currentNum is the number of picture from the ID
  const currentNum = findPicNum(images);

  switch (currentNum) {
    case '4':
      images[3].className = 'lowZ';
      dots[3].className = '';
      images[0].className = 'highZ';
      dots[0].className = 'selectedDot';
      break;
    case '3':
      images[2].className = 'lowZ';
      dots[2].className = '';
      images[3].className = 'highZ';
      dots[3].className = 'selectedDot';
      break;
    case '2':
      images[1].className = 'lowZ';
      dots[1].className = '';
      images[2].className = 'highZ';
      dots[2].className = 'selectedDot';
      break;
    case '1':
      images[0].className = 'lowZ';
      dots[0].className = '';
      images[1].className = 'highZ';
      dots[1].className = 'selectedDot';
      break;
    default:
      console.log(images);
  }
}

function imgSliderPrev() {
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  const trackingDiv = document.querySelector('.trackingDots');
  const dots = trackingDiv.querySelectorAll('div');
  // currentNum is the number of picture from the ID
  const currentNum = findPicNum(images);
  switch (currentNum) {
    case '4':
      images[3].className = 'lowZ';
      dots[3].className = '';
      images[2].className = 'highZ';
      dots[2].className = 'selectedDot';
      break;
    case '3':
      images[2].className = 'lowZ';
      dots[2].className = '';
      images[1].className = 'highZ';
      dots[1].className = 'selectedDot';
      break;
    case '2':
      images[1].className = 'lowZ';
      dots[1].className = '';
      images[0].className = 'highZ';
      dots[0].className = 'selectedDot';
      break;
    case '1':
      images[0].className = 'lowZ';
      dots[0].className = '';
      images[3].className = 'highZ';
      dots[3].className = 'selectedDot';
      break;
    default:
      console.log(images);
  }
}

// custom image select per dot click. This function just changed to allow currentNum to be a passed parameter
function imgSliderDotClick(currentNum) {
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  const trackingDiv = document.querySelector('.trackingDots');
  const dots = trackingDiv.querySelectorAll('div');
  // currentNum is passed in as the desired image to shift to. currentPicture is the placeholder for previous picture.
  const currentPicture = findPicNum(images) - 1;

  switch (currentNum) {
    case '4':
      console.log(currentPicture);
      images[currentPicture].className = 'lowZ';
      dots[currentPicture].className = '';
      images[3].className = 'highZ';
      dots[3].className = 'selectedDot';
      break;
    case '3':
      images[currentPicture].className = 'lowZ';
      dots[currentPicture].className = '';
      images[2].className = 'highZ';
      dots[2].className = 'selectedDot';
      break;
    case '2':
      console.log(currentPicture);
      images[currentPicture].className = 'lowZ';
      dots[currentPicture].className = '';
      images[1].className = 'highZ';
      dots[1].className = 'selectedDot';
      break;
    case '1':
      images[currentPicture].className = 'lowZ';
      dots[currentPicture].className = '';
      images[0].className = 'highZ';
      dots[0].className = 'selectedDot';
      break;
    default:
      console.log(images);
  }
}

function imgSliderListener() {
  // Set up baseline, as default is the last image has the highest Z
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  images[0].className = 'highZ';
  images[3].className = 'lowZ';

  document.addEventListener('click', (event) => {
    const parent = event.target.parentNode.getAttribute('class');

    if (parent === 'left' && event.target.nodeName === 'BUTTON') {
      imgSliderPrev();
    } else if (parent === 'right' && event.target.nodeName === 'BUTTON') {
      imgSliderNext();
    }
  });

  loop();
}

// auto loop pictures
// eslint-disable-next-line no-plusplus
function loop() {
  setTimeout(() => {
    imgSliderNext();
    loop();
  }, 6000);
}

// tracking dots click listener
function dotsListen() {
  document.addEventListener('click', (event) => {
    const parentClass = event.target.parentNode.getAttribute('class');
    const parent = document.querySelector('.trackingDots');
    const children = Array.from(parent.querySelectorAll('div'));
    const index = children.indexOf(event.target);
    if (event.target.textContent === '' && parentClass === 'trackingDots') {
      // currentNum is the dot that is clicked, starting from 0.
      const currentNum = index + 1;
      imgSliderDotClick(currentNum.toString());
    }
  });
}

dotsListen();
export { imgSliderListener, loop };
