function verifField() {

	var recup_soute1 = document.getElementById('soute1').value;
	var recup_soute2 = document.getElementById('soute2').value;
	var recup_soute6 = document.getElementById('soute6').value;

	if (recup_soute1 != "" && recup_soute2 != "" && recup_soute6 != "" ) {


		recupNbr();
	
	} else {
		alert("Veuillez remplir tous les champs");
	}

}

function recupNbr() {
	
	var soute1 = -0.5;
	var soute2 = -0.2;
	var soute6 = 0.9;

	var recup_soute1 = document.getElementById('soute1').value;
	var recup_soute2 = document.getElementById('soute2').value;
	var recup_soute6 = document.getElementById('soute6').value;

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
	document.getElementById('maDiv1').innerHTML=soute1;

	var affiche_soute2 = '<p>soute2</p>';
	document.getElementById('maDiv2').innerHTML=soute2;

	var affiche_soute6 = '<p>sout6</p>';
	document.getElementById('maDiv3').innerHTML=soute6;

	var affiche_resul = '<p>resultat</p>';
	document.getElementById('maDiv').innerHTML=resultat;

	


}



	




