let offset = 0;
const sliderLine= document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function() {
	offset = offset - 1000;
	if (offset < -2000) {
		offset = 0;
	}
	sliderLine.style.left = offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
	offset = offset + 1000;
	if (offset > 0) {
		offset = -2000;
	}
	sliderLine.style.left = offset + 'px';
});

var currentText = 1;

var currentText = 1;

function changeText(direction) {
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var div3 = document.getElementById('div3');

  if (direction === 'next') {
    if (currentText === 1) {
      div1.classList.remove('active');
      div2.classList.add('active');
      currentText = 2;
    } else if (currentText === 2) {
      div2.classList.remove('active');
      div3.classList.add('active');
      currentText = 3;
    } else if (currentText === 3) {
      div3.classList.remove('active');
      div1.classList.add('active');
      currentText = 1;
    }
  } else if (direction === 'prev') {
    if (currentText === 1) {
      div1.classList.remove('active');
      div3.classList.add('active');
      currentText = 3;
    } else if (currentText === 2) {
      div2.classList.remove('active');
      div1.classList.add('active');
      currentText = 1;
    } else if (currentText === 3) {
      div3.classList.remove('active');
      div2.classList.add('active');
      currentText = 2;
    }
  }
}