
//Création du tableau
var table = document.createElement("table");
var bascule = false;


//Permet de changer les images de fond
var tableauImage = [ '0 -100px', '0 -200px', '0 -300px', '0 -400px',
		'0 -500px', '0px -600px', '0 -700px', '0 -800px', '0 -900px',
		'0 -1000px', '00 -1100px', '00 -1200px', '0 -1100px',
		'0 -200px', '0 -300px', '0 -400px', '0 -500px', '0 -600px',
		'0 -700px', '0 -800px', '0 -900px', '0 -1000px',
		'0 -1100px', '0 -1200px' ];


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

		$(cellImage).css("background-position", tableauImage[5]);

		cell.appendChild(cellImage);
		// J'ajoute la cellule au tableau
		row.appendChild(cell);

	}

	table.appendChild(row);
	bascule = !bascule;
}
// table.className = "grille";
document.getElementById("main").appendChild(table);


/*
for (var i = 1; i <= 4; i++) {
	for (var j = 1; j <= 7; j++) {
		var idCell = j + "," + i + "-image";
		$("#"+cellImage).css( "background-position", tableauImage[2]);
	}
}
*/









// Fonction afficher une image
function afficheImage(event) {
	// console.log("toto");
	// console.log(event.id);

	/*
	 * var carte = document.getElementById(event.id);
	 * carte.style.backgroundColor = "red"; carte.textContent ="Toto";
	 */
	
	/*
	 * $('.image', this).css( 'background-position', '0 -100px');
	 * $('.image', this).css( 'background-position', tableauImage[5]);
	 */

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
			var premiereImageID = document.getElementById(this.id);
			console.log(premiereImageID);
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
			console.log(secondeImageID);

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
		}
	}

}

// Fonction premettant de retourner les images en faces cachées
/*
 * function reset(premiereImageID,secondeImageID){ $( ".image", premiereImageID
 * ).css( "visibility", "hidden" ).css("display","none"); $( ".cache",
 * premiereImageID ).css( "visibility", "visible" ).css("display", "block"); $(
 * ".image", secondeImageID ).css( "visibility", "hidden"
 * ).css("display","none"); $( ".cache", secondeImageID ).css( "visibility",
 * "visible" ).css("display", "block");
 *  // Permet d'empecher l'affichage de plus de 2 images affichagePossible =
 * true; }
 */

// Tableau des background-position
/*
 * console.log(tableauImage[1]); console.log(tableauImage[12]);
 * 
 * var tab = document.createElement("div");
 * tab.appendChild(document.createTextNode(tableauImage[11]));
 * document.getElementById("main").appendChild(tab);
 */

var premierClick = true;
var affichagePossible = true;

$('.card').on('click', afficheImage);