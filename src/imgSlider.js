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
  const currentNum = findPicNum(images);
  switch (currentNum) {
    case '4':
      // dots numbers wont match the image # because i want dot 1 to equal the first picture
      images[3].className = 'lowZ';
      dots[0].className = '';
      images[0].className = 'highZ';
      dots[1].className = 'selectedDot';
      break;
    case '3':
      images[2].className = 'lowZ';
      dots[3].className = '';
      images[3].className = 'highZ';
      dots[0].className = 'selectedDot';
      break;
    case '2':
      images[1].className = 'lowZ';
      dots[2].className = '';
      images[2].className = 'highZ';
      dots[3].className = 'selectedDot';
      break;
    case '1':
      images[0].className = 'lowZ';
      dots[1].className = '';
      images[1].className = 'highZ';
      dots[2].className = 'selectedDot';
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
  const currentNum = findPicNum(images);
  switch (currentNum) {
    case '4':
      // dots numbers wont match the image # because i want dot 1 to equal the first picture
      images[3].className = 'lowZ';
      dots[0].className = '';
      images[2].className = 'highZ';
      dots[3].className = 'selectedDot';
      break;
    case '3':
      images[2].className = 'lowZ';
      dots[3].className = '';
      images[1].className = 'highZ';
      dots[2].className = 'selectedDot';
      break;
    case '2':
      images[1].className = 'lowZ';
      dots[2].className = '';
      images[0].className = 'highZ';
      dots[1].className = 'selectedDot';
      break;
    case '1':
      images[0].className = 'lowZ';
      dots[1].className = '';
      images[3].className = 'highZ';
      dots[0].className = 'selectedDot';
      break;
    default:
      console.log(images);
  }
}

function imgSliderListener() {
  document.addEventListener('click', (event) => {
    const parent = event.target.parentNode.getAttribute('class');

    if (parent === 'left' && event.target.nodeName === 'BUTTON') {
      imgSliderPrev();
    } else if (parent === 'right' && event.target.nodeName === 'BUTTON') {
      imgSliderNext();
    }
  });
}

setTimeout(imgSliderNext, 6000);

export { imgSliderListener };
