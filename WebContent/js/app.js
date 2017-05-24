//Permet de changer les images de fond
var tableauImage = [ '0px 0px', '0px -100px', '0px -200px', '0px -300px',
		'0px -400px', '0px -500px', '0px -600px', '0px -700px', '0px -800px',
		'0px -900px', '0px -1000px', '0px -1100px', '0px -1200px',
		'0px -1300px', '0px 0px', '0px -100px', '0px -200px', '0px -300px',
		'0px -400px', '0px -500px', '0px -600px', '0px -700px', '0px -800px',
		'0px -900px', '0px -1000px', '0px -1100px', '0px -1200px',
		'0px -1300px', ];



// Création du tableau
var table = document.createElement("table");
var bascule = false;

for (var i = 1; i <= 4; i++) {
	var row = document.createElement("tr");
	for (var j = 1; j <= 7; j++) {
		// Je crée ma cellule
		var cell = document.createElement("td");
		cell.className = "card";
		cell.id = j + "," + i;
		// je crée la partie carte retournée
		var cellCache = document.createElement("div");
		cellCache.className = "cache";
		cell.appendChild(cellCache);

		// je crée la partie carte visible
		var cellImage = document.createElement("div");
		cellImage.className = "image";
		cellImage.id = j + "," + i + "-image";

		$(cellImage).css("background-position", tableauImage[recupererUneValeurDansTableau()]);

		cell.appendChild(cellImage);
		// J'ajoute la cellule au tableau
		row.appendChild(cell);
	}

	table.appendChild(row);
	bascule = !bascule;
}
// table.className = "grille";
document.getElementById("main").appendChild(table);




// Fonction permettant d'appeler un nombre au sein du tableau et de le supprimer
// ensuite
function recupererUneValeurDansTableau() {
	
	// Tableau avec les indices
	var tableauIndice = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
			"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
			"22", "23", "24", "25", "26", "27", "28");

	// Définit la longueur du tableau "tableauIndice"
	var tableauIndiceLength = tableauIndice.length;
	
	// permet d'obtenir un nombre compris entre 0 et la longueur du tableau "tableauIndice"
	var indice = Math.floor((Math.random() * tableauIndiceLength) + 1);
	
	// fonction "splice" permettant de supprimer "1" nombre à partir de l'indice "indice"
	tableauIndice.splice(indice, 1);
	
	// retourne l'indice
	return indice;
}



var PremiereImageBackgroundPosition;
var SecondeImageBackgroundPosition;
var premiereImageID;

// Fonction afficher une image
function afficheImage(event) {
	// console.log("toto");
	// console.log(event.id);

	// Condition à respecter pour ne pas retourner plus de 2 cartes
	if (affichagePossible) {
		// condition réalisée s'il s'agit du premier clic
		if (premierClick) {
			$(".cache", this).css("visibility", "hidden")
					.css("display", "none");
			$(".image", this).css("visibility", "visible").css("display",
					"block");
			premierClick = false;
			console.log("Premier clic : " + premierClick);
			premiereImageID = document.getElementById(this.id);
			PremiereImageBackgroundPosition = $(".image", this).css("background-position")
			console.log("background position : " + PremiereImageBackgroundPosition);
		}
		// condition réalisée s'il s'agit du second clic
		else {
			$(".cache", this).css("visibility", "hidden")
					.css("display", "none");
			$(".image", this).css("visibility", "visible").css("display",
					"block");
			premierClick = true;
			affichagePossible = false;
			console.log("Premier clic : " + premierClick);
			var secondeImageID = document.getElementById(this.id);
			SecondeImageBackgroundPosition = $(".image", this).css("background-position")
			console.log("background position : " + SecondeImageBackgroundPosition);


			if (SecondeImageBackgroundPosition !== PremiereImageBackgroundPosition) {
				// setTimeout(reset(premiereImageID,secondeImageID), 1000);
				setTimeout(function() {
					$(".image", premiereImageID).css("visibility", "hidden").css(
							"display", "none");
					$(".cache", premiereImageID).css("visibility", "visible").css(
							"display", "block");
					$(".image", secondeImageID).css("visibility", "hidden").css(
							"display", "none");
					$(".cache", secondeImageID).css("visibility", "visible").css(
							"display", "block");
				}, 1000);
				setTimeout(function() {
					affichagePossible = true;
				}, 1000);
			} else {
				affichagePossible = true;			
			}
				
		}
	}

}







var premierClick = true;
var affichagePossible = true;

$('.card').on('click', afficheImage);