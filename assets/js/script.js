var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	closePopup = document.getElementById('closePopup'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	cerrarPopup = document.getElementById('cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	closePopup.classList.add('active');
	popup.classList.add('active');
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function(){ window.scrollTo(x, y) };
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	closePopup.classList.remove('active');
	popup.classList.remove('active');
	window.onscroll = null;
});

cerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	closePopup.classList.remove('active');
	popup.classList.remove('active');
	window.onscroll = null;
});