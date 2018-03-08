function typeAvion() {
	var recup_avion1 = document.getElementById('CRK').checked;
	var recup_avion2 = document.getElementById('CR7').checked;

	if (recup_avion1 == true) {
		CRK();
	} else if (recup_avion2 == true) {
		
		CR7();
	} else {
		alert("Vous n'avez pas choisi d'avion");
	}

}

function CRK() {
	var recup_poid1 = document.getElementById('superieur1').checked;
	var recup_poid2 = document.getElementById('sup-egal1').checked;


	if (recup_poid1 == true) {
		
		var soute1 = -0.5;
		var soute2 = -0.2;
		var soute6 = 0.9;

		verifField(soute1,soute2,soute6);
	
	} else if (recup_poid2 == true) {
		
		var soute1 = -0.7;
		var soute2 = -0.2;
		var soute6 = 1.2;

		verifField(soute1,soute2,soute6);

	} else {
		alert("Choisissez le poid de l'avion");
	}
}

function CR7() {
	var recup_poid1 = document.getElementById('superieur2').checked;
	var recup_poid2 = document.getElementById('sup-egal2').checked;

	if (recup_poid1 == true) {
		
		var soute1 = -0.3;
		var soute2 = 0;
		var soute6 = 0.9;

		verifField(soute1,soute2,soute6);
	
	} else if (recup_poid2 == true) {
		
		var soute1 = -0.4;
		var soute2 = 0;
		var soute6 = 1.2;

		verifField(soute1,soute2,soute6);

	} else {
		alert("Choisissez le poid de l'avion");
	}

} 

function verifField(soute1,soute2,soute6) {

	var recup_soute1 = document.getElementById('soute1').value;
	var recup_soute2 = document.getElementById('soute2').value;
	var recup_soute6 = document.getElementById('soute6').value;

	if (recup_soute1 == "" && recup_soute2 == "" && recup_soute6 == "" ) {

		var recup_soute1 = 0;
		var recup_soute2 = 0;
		var recup_soute6 = 0;
		
		recupNbr(recup_soute1,recup_soute2,recup_soute6,soute1,soute2,soute6);
	
	} else {
		
		recupNbr(recup_soute1,recup_soute2,recup_soute6,soute1,soute2,soute6);
	}

}

function recupNbr(recup_soute1,recup_soute2,recup_soute6,soute1,soute2,soute6) {


	var recup_soute1 = recup_soute1/10;
	var recup_soute2 = recup_soute2/10;
	var recup_soute6 = recup_soute6/10;
	
	
		var soute1 = soute1 * recup_soute1;
		var soute2 = soute2 * recup_soute2;
		var soute6 = soute6 * recup_soute6;
		
		var resultat = soute1 + soute2 + soute6;
		var resultat = resultat.toFixed(2);
		
		
		
		affichage(resultat, soute1, soute2, soute6);
}


function affichage (resultat, soute1, soute2, soute6) {

	var affiche_soute1 = '<p>soute1</p>';
	document.getElementById('soute1').innerHTML=soute1;

	var affiche_resul = '<p>resultat</p>';
	document.getElementById('resultat').innerHTML=resultat;

	


	// var affiche_soute2 = '<p>soute2</p>';
	// document.getElementById('soute2').innerHTML=soute2;

	// var affiche_soute6 = '<p>sout6</p>';
	// document.getElementById('soute3').innerHTML=soute6;

	

}



	




