var tableauImage = new Array ('0px 0px', '0px -100px', '0px -200px', '0px -300px',
		'0px -400px', '0px -500px', '0px -600px', '0px -700px', '0px -800px',
		'0px -900px', '0px -1000px', '0px -1100px', '0px -1200px',
		'0px -1300px', '0px 0px', '0px -100px', '0px -200px', '0px -300px',
		'0px -400px', '0px -500px', '0px -600px', '0px -700px', '0px -800px',
		'0px -900px', '0px -1000px', '0px -1100px', '0px -1200px',
		'0px -1300px');

// Boucle permettant de mélanger le tableau "tableauImage"
for(var position=tableauImage.length-1; position>=1; position--){
	//hasard reçoit un nombre entier aléatoire entre 0 et position
	var hasard=Math.floor(Math.random()*(position+1));
	
	//Echange
	var sauve=tableauImage[position];
	tableauImage[position]=tableauImage[hasard];
	tableauImage[hasard]=sauve;
}



// Initialisation de la variable index
var index = 0;

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

		// affecte une image au tableau mélangé
		$(cellImage).css("background-position", tableauImage[index]);
		++index;

		cell.appendChild(cellImage);
		// J'ajoute la cellule au tableau
		row.appendChild(cell);
	}

	table.appendChild(row);
	bascule = !bascule;
}
// table.className = "grille";
document.getElementById("main").appendChild(table);





var PremiereImageBackgroundPosition;
var SecondeImageBackgroundPosition;
var premiereImageID;
var NbCartesRetournees = 0;

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
			premiereImageID = document.getElementById(this.id);
			PremiereImageBackgroundPosition = $(".image", this).css("background-position")
		}
		// condition réalisée s'il s'agit du second clic
		else {
			$(".cache", this).css("visibility", "hidden")
					.css("display", "none");
			$(".image", this).css("visibility", "visible").css("display",
					"block");
			premierClick = true;
			affichagePossible = false;
			var secondeImageID = document.getElementById(this.id);
			SecondeImageBackgroundPosition = $(".image", this).css("background-position")


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
				NbCartesRetournees = NbCartesRetournees + 2;
			}				
		}
	}
	
	if (NbCartesRetournees == 28) {
		setTimeout(function() {
			alert("Vous avez gagné !");
		}, 500);
	}
}







var premierClick = true;
var affichagePossible = true;

$('.card').on('click', afficheImage);