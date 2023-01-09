
console.log('bun venit pe pagina de produs!');



//////////////////////////////////////////////////////////////////////////////////titlu-produs */


 
   var tit = document.getElementById('prodTitle'); 
	
	
	tit.innerHTML = "Produsul numărul: " + Math.floor(Math.random() *1000);
		
		
		
var rst = document.getElementById('rest');
		
		rst.innerHTML = Math.floor(Math.random() *100);



var baza = document.getElementById('baza');

 	baza.innerHTML =  Math.floor(Math.random() *100) + ',' ;



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}
 