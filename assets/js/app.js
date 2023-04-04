var container = document.getElementById('nav-menu');
var hamburger = document.getElementById('menu');

document.getElementById('menu').addEventListener('click', function (event) {
	event.preventDefault();

	if (!container.classList.contains('active')) {
    container.classList.add('active');
    container.style.height = 'calc(100vh - 5rem)';

    var height = container.clientHeight + 'px';
    
    container.style.height = '0px';
    
    console.log(height);

    setTimeout(function () {
      container.style.height = height;
    }, 0);
  } else {
    container.style.height = '0px';

    container.addEventListener('transitionend', function () {
      container.classList.remove('active');
    }, {
      once: true
    });
  }
});

// If window is big sets active to nav-menu
document.addEventListener("DOMContentLoaded", function(event) {
  //código a ejecutar cuando el DOM está listo para recibir acciones
  if (document.body.clientWidth > 767){
    container.classList.add('active');
  }
});

// Close menu o resize
window.addEventListener('resize', ()=>{
  hamburger.classList.remove('opened');
  if(document.body.clientWidth < 768){
    container.classList.remove('active');
  } else {
    container.classList.add('active');
    container.style.height = 'auto';
  }
});
