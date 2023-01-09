// javascript page for e-drops Menu 


// baloane de notificare
var balon = document.getElementById('balon');
function balon() {	
	balon.style.display = "block";
}

function balonOf() {
	balon.style.display = "none";	
}





// MENIU LATERAL 

var menuItem = document.getElementsByClassName('meniu')[0]; 

function meniu_on() {

	menuItem.style.width = "calc(100vh/2)";
	if (window.outerWidth < 840) {
		
		menuItem.style.width = "100%";
		
	}
	
	menuItem.style.visibility = "visible";
	document.body.style.overflow = "hidden";

}

function meniu_off() {

	menuItem.style.width = "0";
	menuItem.style.visibility = "hidden";
	document.body.style.overflow = "auto";
}

// logare 

function log() {

	
	document.getElementsByClassName('menu-box')[0].style.display = "none";
	document.getElementById('logare').style.display = "block";
	document.getElementById('menuTop').style.display = "none";
	meniu_on();	
}

function logOf() {

	
	document.getElementsByClassName('menu-box')[0].style.display = "block";
	document.getElementById('logare').style.display = "none";
	document.getElementById('menuTop').style.display = "block";	
}



//parola

function showPass() {
// pentru formularul de log-in
var x = document.getElementById("parola");

var y = document.getElementById("parola_view");

if (x.type ==="password"){

	x.type = "text";
	y.innerHTML = "Parola este vizibilă!";

} else {

	x.type = "password";
	y.innerHTML = "Parola este  ascunsă!";
}


}

function showPasstwo() {
// pentru formularul de inscriere
var x = document.getElementById("parolaTwo");

var y = document.getElementById("parolaViewtwo");

if (x.type ==="password"){

	x.type = "text";
	y.innerHTML = "Parola este vizibilă!";

} else {

	x.type = "password";
	y.innerHTML = "Parola este  ascunsă";
}


}

var helloItem = document.getElementById('hello');

function userEnter() {
// butonul connectare din formularul de log-in 
	var id = document.getElementById('username');

if(id.value == ""){
	
	document.getElementById('balon').innerHTML = "Numele de utilizator nu este valid!";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	id.placeholder = "Numele introdus este invalid!";
		
return 0;	
}
			
	helloItem.innerHTML = document.getElementById('username').value;
	document.getElementById('usrname').innerHTML = document.getElementById('username').value;
	helloItem.href = "subpagini/agent.html";
	document.getElementById('profileImg').style.backgroundImage = "url('imagini/user.png')";
	document.getElementById('logare').style.display ="none";
	document.getElementById("deconectare").style.display = "inline";
	document.getElementById('acces').style.display = 'none';
	document.getElementById('usermsg').innerHTML = document.getElementById('username').value;
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	document.getElementById('logare').style.display = "none";
	document.getElementsByClassName('menu-box')[0].style.display = "block";
		
}

	
function finalizare() {
	
	 
	document.getElementById('balon').innerHTML = "Bun venit la noi!.";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	document.getElementById("deconectare").style.display = "inline";
	document.getElementById('logare').style.display = "block";
}



function deconectare() {
	
	helloItem.innerHTML = "Conectaţi-vă!";
	document.getElementById('logare').style.width ="0";
	document.getElementById("deconectare").style.display = "none";
	document.getElementById('conectare').style.display = 'inline';
	document.getElementById('profileImg').style.backgroundImage = "url('imagini/cont.png')";
	helloItem.href = "#";
	document.getElementById('logare').style.display ="block";
	document.getElementById('balon').innerHTML = "La revedere!";
	window.setTimeout(balon,1000);
	window.setTimeout(balonOf,3000);
	document.getElementById('menuTop').style.display = "block";
	document.getElementById('logare').style.display = "none";
}

// cos 

function cartOn() {

	meniu_on();
	document.getElementsByClassName('menu-box')[0].style.display = "none";
	document.getElementById('cart').style.display = "block";
	document.getElementById('menuTop').style.display = "none";
	
	
}

function cartOf() {

	document.getElementsByClassName('menu-box')[0].style.display = "block";
	document.getElementById('cart').style.display = "none";
	document.getElementById('menuTop').style.display = "block";
	document.getElementById('message').style.display = "none";
	meniu_on();
}

// feedback


function opinion() {

	var element = document.getElementById("parere");
	 
	 element.style.display = (element.style.display == "block")? "none" : "block";
	
}


