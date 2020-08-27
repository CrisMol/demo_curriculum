var i=0;
var text;

text1 = "Ingeniero en Informática y Ciencias de la Computación....";

function typing() {
	if (i<text1.length) {
		document.getElementById('header2').innerHTML += text1.charAt(i);
		i++;
		setTimeout(typing,50);
	}
	if (i>=text1.length) {
		$("#header2").empty();
		setTimeout(100);
	}
}

typing();