window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
}

var buttonprev = document.querySelector(".button.prev");
var buttoncerrar = document.querySelector(".button.cerrar");
var buttonnext = document.querySelector(".button.next");
var slider_img = document.querySelector(".image-slider");
var images = ['Proyecto De Una Red Social Parecida A Twitter Comentarios.png', 'Proyecto De Una Red Social Parecida A Twitter Imagenes Favoritas.png', 
'Proyecto De Una Red Social Parecida A Twitter Subida de Imagenes.png', 'Proyecto De Una Red Social Parecida A Twitter Usuarios.png'];
var i = 0;

document.querySelectorAll(".modal-container img").forEach(el=>{
	el.addEventListener("click", function(ev){
		ev.stopPropagation();
		this.parentNode.classList.add("active");
		if (buttonprev) {buttonprev.classList.add("active");};
		if (buttonnext) {buttonnext.classList.add("active");};
		buttoncerrar.classList.add("active");
	});
});

function prev(){
	if (i <= 0) {
		i = images.length;
	}
	i--;
	return setImg();
}

function next(){
	if (i >= images.length-1) {
		i = -1;
	}
	i++;
	return setImg();
}

function cerrar(){
	var modal = document.querySelector(".modal-container.active");
	modal.classList.remove("active");
	if (buttonprev) {buttonprev.classList.remove("active");};
	if (buttonnext) {buttonnext.classList.remove("active");};
	buttoncerrar.classList.remove("active");
	
}

function setImg(){
	return slider_img.setAttribute('src', 'images/'+images[i]);
}