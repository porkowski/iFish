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
  const currentNum = findPicNum(images);
  switch (currentNum) {
    case '4':
      images[3].className = 'lowZ';
      images[0].className = 'highZ';
      break;
    case '3':
      images[2].className = 'lowZ';
      images[3].className = 'highZ';
      break;
    case '2':
      images[1].className = 'lowZ';
      images[2].className = 'highZ';
      break;
    case '1':
      images[0].className = 'lowZ';
      images[1].className = 'highZ';
      break;
    default:
      console.log(images);
  }
}

function imgSliderPrev() {
  const slider = document.querySelector('.imgSlider');
  const images = slider.querySelectorAll('img');
  const currentNum = findPicNum(images);
  switch (currentNum) {
    case '4':
      images[3].className = 'lowZ';
      images[2].className = 'highZ';
      break;
    case '3':
      images[2].className = 'lowZ';
      images[1].className = 'highZ';
      break;
    case '2':
      images[1].className = 'lowZ';
      images[0].className = 'highZ';
      break;
    case '1':
      images[0].className = 'lowZ';
      images[3].className = 'highZ';
      break;
    default:
      console.log(images);
  }
}

function imgSliderListener() {
  const leftdiv = document.querySelector('.left');
  const rightdiv = document.querySelector('.right');

  document.addEventListener('click', (event) => {
    const parent = event.target.parentNode.getAttribute('class');

    if (parent === 'left' && event.target.nodeName === 'BUTTON') {
      imgSliderPrev();
    } else if (parent === 'right' && event.target.nodeName === 'BUTTON') {
      imgSliderNext();
    }
  });
}
export { imgSliderListener };
