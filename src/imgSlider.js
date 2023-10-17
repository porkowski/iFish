/* eslint-disable no-plusplus */
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

function imgSlider(direction) {
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  const trackingDiv = document.querySelector('.trackingDots');
  const dots = trackingDiv.querySelectorAll('div');
  // currentNum is the number of picture from the ID
  const currentNum = findPicNum(images);
  const currentIndex = currentNum - 1;
  // current Index aka current image gets hidden when sliding through images
  images[currentIndex].className = 'lowZ';
  dots[currentIndex].className = '';

  if (direction === 'next') {
    if (parseInt(currentNum) === images.length) {
      images[0].className = 'highZ';
      dots[0].className = 'selectedDot';
    } else {
      images[currentNum].className = 'highZ';
      dots[currentNum].className = 'selectedDot';
    }
  } else if (direction === 'prev') {
    if (parseInt(currentNum) === 1) {
      images[images.length - 1].className = 'highZ';
      dots[images.length - 1].className = 'selectedDot';
    } else {
      images[currentNum - 2].className = 'highZ';
      dots[currentNum - 2].className = 'selectedDot';
    }
  } else {
    // if dot is clicked, the current dot number is passed as 'direction'
    images[direction - 1].className = 'highZ';
    dots[direction - 1].className = 'selectedDot';
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
      imgSlider('prev');
    } else if (parent === 'right' && event.target.nodeName === 'BUTTON') {
      imgSlider('next');
    }
  });

  loop();
}

// auto loop pictures
// eslint-disable-next-line no-plusplus
function loop() {
  setTimeout(() => {
    imgSlider('next');
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
      imgSlider(currentNum);
    }
  });
}

dotsListen();
export { imgSliderListener, loop };
