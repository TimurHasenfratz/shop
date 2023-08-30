
// navbar dissapears on scrolldown and reappears on scrollup

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}






 // Function to handle the button clicks
 function handleButtonClick(event) {
  const container = event.target.closest('.div-container');
  const content = container.querySelector('.content');
  
  if (event.target.classList.contains('toggle-heart')) {
    content.classList.toggle('filled'); 
  } else if (event.target.classList.contains('purchase-btn')) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  } else if (event.target.classList.contains('purchase-btn')) {
    content.classList.toggle('remove');
  } else if (event.target.classList.contains('menu-btn')) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  } else if (event.target.classList.contains('size-btn')) {
    content.classList.toggle('hidden');
  } else if (event.target.classList.contains('color-btn')) {
    content.classList.toggle('hidden');
  } 
 
}

// Attach click event listener to all buttons using event delegation
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggle-heart') ||
      event.target.classList.contains('purchase-btn') ||
      event.target.classList.contains('size-btn') ||
      event.target.classList.contains('menu-btn') ||
      event.target.classList.contains('color-btn')) {
    handleButtonClick(event);
  }
});





function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}




const heartFill = document.querySelector('.toggle-heart');

heart.addEventListener('click', () => {
  
  heartFill.classList.toggle('filled');
});







