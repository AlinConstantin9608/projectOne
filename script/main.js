
// Pagina JavaScript a www.e-Drops.ro */

console.log("Bine ați venit! e-Drops Romania");

function intampinare() {

alert( 'Serviciu inactiv!\n\n  Pentru moment acest serviciu nu este disponibil.\n\n Cod de Eroare:404-111-2020-05-20xx9Cxx');


}


var der = document.getElementById('toTop');

window.onscroll = function() {goTopset()};

function goTopset() {
	
	if(document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20) {
		
		der.style.display = "block";
		
	} else {
		
		der.style.display = "none";
		
	}
	
}

function goTop() {
	
	document.body.scrollTop = 0; // asta pentru Safari 
	
	document.documentElement.scrollTop = 0; // pentru celelalte 
}

function dar() {

var d = new Date();

var day = d.getDate();

var m = d.getMonth();

if(day ==  22  && m  ==  7) {

	alert('La multi ani , Alin!');


}

}

// ZIUA */
var text;
switch (new Date().getDay()) {

	case 0 :
	text="Duminică";
	break;

	case 1 :
	text="Luni";
	break;

	case 2 :
	text="Marți";
	break;

	case 3 :
	text="Miercuri";
	break;

	case 4 :
	text="Joi";
	break;

	case 5 :
	text="Vineri";
	break;

	case 6 :
	text="Sambată";


	
}

document.getElementById("ziua").innerHTML= text;
document.getElementById("artDate").innerHTML= text;

//////////////////////////////////////////////////////////////////////////////////titlu-produs */
var tit = document.getElementsByClassName('titlu-produs');

	for (i=0; i<tit.length; i++) {
		
		tit[i].innerHTML = "Produsul numărul: " + Math.floor(Math.random() *1000);
		
}



////////////////////////////////////////////////////////////////////////////pret */

var rst = document.getElementsByClassName('rest');

	for (i=0; i<tit.length; i++) {
		
		rst[i].innerHTML = Math.floor(Math.random() *100);
		
}


var baza = document.getElementsByClassName('baza');

	for (i=0; i<tit.length; i++) {
		
		baza[i].innerHTML =  Math.floor(Math.random() *100) + ',' ;
		
}


/////////////////////////////////////////////////////////////////////// buton cos produse */

function addCart() {
	
	const prf = document.createElement("li");
	const abc = document.createTextNode("merge!");
	prf.appendChild(abc);
	

		document.getElementById("shopCart").appendChild(prf);

	
}


var c = document.getElementsByClassName('buy');

	for (i=0; i<c.length; i++) {
		
		c[i].innerHTML = " Adaugă in coș";

	c[i].setAttribute("onclick", "addCart()");// adauga functia de punere in cos pentru toate butonanele buy */
}

///////////////////////////////////////////////////////////////// CEAS */

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("ceas").innerHTML = d.toLocaleTimeString();

}


//////////////////////////////////////////////////////////// LUNA SI ANUL CURENT */

var d = new Date();

var months = [ "Ianuarie" , "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August" ,"Septembrie"  ,"Octombrie" , "Noiembrie" , "Decembrie"];

document.getElementById("marca").innerHTML =  months[d.getMonth()] + "  " +   d.getFullYear()  ;


//////////////////////////////////////////////////////////////// MOD DE NOAPTE */


function nightShift() {

	document.body.style.overflow = "auto";
	
	var element = document.body;
	element.classList.toggle("body-night");

var elements = document.querySelectorAll(" header, div.panou,  .produse,  .cos, .buy, .buton, .distribuitor, .nav, .meniu, .footer, .panou , .more");

	for (i=0 ; i < elements.length ; i++) {

	elements[i].classList.toggle("negru");

}
	

}


function search() {

	var x = document.getElementById("searchBar").value;
	var y = document.getElementById("searchBtn").value;


	if (x == 0)  {
		
		
	document.getElementById('balon').innerHTML = "Incercaţi sa introduceţi o valoare ...";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	}

	if (x < 0) {

	document.getElementById('balon').innerHTML = "Numărul" + " " + x + " " + "este un număr negativ.";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	}


	if (x > 0) {

		document.getElementById('balon').innerHTML = "Numărul" + " " + x + " " + "este un număr pozitiv.";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);

}

}




