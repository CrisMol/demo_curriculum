/*var i=0;
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
*/
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Ingeniero en Informática y Ciencias de la Computación...", "Programador...", "Desarrollador Web..."];
const typingDelay = 100;
const erasingDelay = 100;
const nextTextDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
	if (charIndex < textArray[textArrayIndex].length) {
		if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	}else{
		cursorSpan.classList.remove("typing");
		setTimeout(erase, typingDelay);
	}
}

function erase(){
	if (charIndex > 0) {
		if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	}else{
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex>=textArray.length) {
			textArrayIndex = 0;
		}
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener("DOMContentLoaded", function(){
	if(textArray.length) setTimeout(type, nextTextDelay + 250);
});
