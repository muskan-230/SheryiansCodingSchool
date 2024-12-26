
var img = document.querySelector('img');
var moveX = 0; 
var moveY = 0;

window.onload = function() {
  const imgWidth = img.offsetWidth;  
  const imgHeight = img.offsetHeight; 

  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;

  document.addEventListener('keydown', function(dets) {
    dets.preventDefault();

    if (dets.code == 'ArrowRight' && moveX < 100 - (imgWidth / bodyWidth) * 100) {
      moveX++; 
      img.style.left = moveX + '%';
    }
    else if (dets.code == 'ArrowLeft' && moveX > 0) {
      moveX--; 
      img.style.left = moveX + '%';
    }
    else if (dets.code == 'ArrowDown' && moveY < 100 - (imgHeight / bodyHeight) * 100) {
      moveY++; 
      img.style.top = moveY + '%';
    }
    else if (dets.code == 'ArrowUp' && moveY > 0) {
      moveY--; 
      img.style.top = moveY + '%';
    }
  });
};

