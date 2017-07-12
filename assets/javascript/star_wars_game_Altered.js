//--variables go here------------
var hcLife = 180;
var hcAttack = 12;

var lukeLife = 190;
var lukeAttack = 16;

var palpatineLife = 250
var palpatineAttack = 27;

var vadarLife = 225
var vadarAttack = 20;

var trooperLife = 100;
var trooperAttack = 8;

var characterSelected = "";
var defendingCharacter = "";

var reLoad;


// Start the game using jQuery on when the page is done loading
$(document).ready(function(){
	$("#hcLifeNum").html(hcLife);
	$("#hcAttackNum").html(hcAttack);
	$("#lukeLifeNum").html(lukeLife);
	$("#lukeAttackNum").html(lukeAttack);
	$("#palpatineLifeNum").html(palpatineLife);
	$("#palpatineAttackNum").html(palpatineAttack);
	$("#vadarLifeNum").html(vadarLife);
	$("#vadarAttackNum").html(vadarAttack);
	$("#trooperLifeNum").html(trooperLife);
	$("#trooperAttackNum").html(trooperAttack);

	function ShowStats() {
		console.log(
			" hcAttack: " + hcAttack +
			" lukeAttack: " + lukeAttack +
			" trooperAttack: " + trooperAttack +
			" palpatineAttack: " + palpatineAttack +
			" vadarAttack: " + vadarAttack
		)
	}

	function selectDefender(){
		$("#selectEnemy").on("click", "section", function(){
			defendingCharacter = this.id;
			console.log("Defender is: " + defendingCharacter);
			if(defendingCharacter == "hc" ){
				$('#hc').appendTo("#attackEnemy")
				$('#selectEnemy').off();
				//console.log("Han and Chewy have been clicked");
				$("#fight_button").on("click");			
			}

			if(defendingCharacter == "luke"){
				$('#luke').appendTo("#attackEnemy")
				$('#selectEnemy').off();
				//console.log("Luke has been clicked");	
				$("#fight_button").on("click");		
			}

			if(defendingCharacter == "palpatine"){
				$('#palpatine').appendTo("#attackEnemy");
				$('#selectEnemy').off();
				//console.log("Palpatine has been clicked");	
				$("#fight_button").on("click");
			}

			if(defendingCharacter == "vadar"){
				$('#vadar').appendTo("#attackEnemy");
				$('#selectEnemy').off();
				//console.log("Vadar has been clicked");
				$("#fight_button").on("click");
			}

			if(defendingCharacter == "trooper"){
				$('#trooper').appendTo("#attackEnemy");
				$('#selectEnemy').off();
				//console.log("Trooper has been clicked");
				$("#fight_button").on("click");
			}
		});
	}



	$("#selectCharacter").one("click", "section", function(){
		characterSelected = this.id;
		console.log("Selected Character is: " + characterSelected);
		if(characterSelected == "hc"){
			$('#hc').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test").off();
			$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");

		}

		if(characterSelected == "luke"){
			$('#luke').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test").off();
			$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
		}

		if(characterSelected == "palpatine"){
			$('#palpatine').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
		}

		if(characterSelected == "vadar"){
			$('#vadar').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test")
			$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
		}

		if(characterSelected == "trooper"){
			$('#trooper').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
		}
	});


	selectDefender();


	$("#fight_button").on("click", function(){

		console.log("Character Selected is: " + characterSelected); 
		//console.log(" Character Defending is: " + defendingCharacter);
		if (characterSelected == "hc" && defendingCharacter == "luke"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			hcLife -= lukeAttack;
			$("#hcLifeNum").html(hcLife);
			hcAttack += 11;
			$("#hcAttackNum").html(hcAttack);
			lukeLife -= hcAttack;
			$("#lukeLifeNum").html(lukeLife);
			if (lukeLife < 0 ){
				$('#luke').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (hcLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}


		if (characterSelected == "hc" && defendingCharacter == "vadar"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Vadar");
			hcLife -= vadarAttack;
			$("#hcLifeNum").html(hcLife);
			hcAttack += 12;
			$("#hcAttackNum").html(hcAttack);
			vadarLife -= hcAttack;
			$("#vadarLifeNum").html(vadarLife);
			if (vadarLife < 0 ){
				$('#vadar').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (hcLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "hc" && defendingCharacter == "trooper"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Trooper")
			hcLife -= trooperAttack;
			$("#hcLifeNum").html(hcLife);
			hcAttack += 8;
			$("#hcAttackNum").html(hcAttack);
			trooperLife -= hcAttack;
			$("#trooperLifeNum").html(trooperLife);
			if (trooperLife < 0 ){
				$('#trooper').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (hcLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "hc" && defendingCharacter == "palpatine"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			hcLife -= palpatineAttack;
			$("#hcLifeNum").html(hcLife);
			hcAttack += 14;
			$("#hcAttackNum").html(hcAttack);
			palpatineLife -= hcAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			if (palpatineLife < 0 ){
				$('#palpatine').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (hcLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "luke" && defendingCharacter == "hc"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			lukeLife -= hcAttack;
			$("#lukeLifeNum").html(lukeLife);
			lukeAttack += 8;
			$("#lukeAttackNum").html(lukeAttack);
			hcLife -= lukeAttack;
			$("#hcLifeNum").html(hcLife);
			if (hcLife < 0 ){
				$('#hc').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (lukeLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}


		if (characterSelected == "luke" && defendingCharacter == "vadar"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Vadar");
			lukeLife -= vadarAttack;
			$("#lukeLifeNum").html(lukeLife);
			lukeAttack += 12;
			$("#lukeAttackNum").html(lukeAttack);
			vadarLife -= lukeAttack;
			$("#vadarLifeNum").html(vadarLife);
			if (vadarLife < 0 ){
				$('#vadar').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (lukeLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "luke" && defendingCharacter == "trooper"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Trooper")
			lukeLife -= trooperAttack;
			$("#lukeLifeNum").html(lukeLife);
			lukeAttack += 8;
			$("#lukeAttackNum").html(lukeAttack);
			trooperLife -= lukeAttack;
			$("#trooperLifeNum").html(trooperLife);
			if (trooperLife < 0 ){
				$('#trooper').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (lukeLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "luke" && defendingCharacter == "palpatine"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			lukeLife -= palpatineAttack;
			$("#lukeLifeNum").html(lukeLife);
			lukeAttack += 13;
			$("#lukeAttackNum").html(lukeAttack);
			palpatineLife -= lukeAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			if (palpatineLife < 0 ){
				$('#palpatine').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (lukeLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "palpatine" && defendingCharacter == "luke"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			palpatineLife -= lukeAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			palpatineAttack += 7;
			$("#palpatineAttackNum").html(palpatineAttack);
			lukeLife -= palpatineAttack;
			$("#lukeLifeNum").html(lukeLife);
			if (lukeLife < 0 ){
				$('#luke').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (palpatineLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}


		if (characterSelected == "palpatine" && defendingCharacter == "vadar"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Vadar");
			palpatineLife -= vadarAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			palpatineAttack += 7;
			$("#palpatineAttackNum").html(palpatineAttack);
			vadarLife -= palpatineAttack;
			$("#vadarLifeNum").html(vadarLife);
			if (vadarLife < 0 ){
				$('#vadar').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (palpatineLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "palpatine" && defendingCharacter == "trooper"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Trooper")
			palpatineLife -= trooperAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			palpatineAttack += 7;
			$("#palpatineAttackNum").html(palpatineAttack);
			trooperLife -= palpatineAttack;
			$("#trooperLifeNum").html(trooperLife);
			if (trooperLife < 0 ){
				$('#trooper').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (palpatineLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "palpatine" && defendingCharacter == "hc"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			hcLife -= lukeAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			palpatineAttack += 7;
			$("#palpatineAttackNum").html(palpatineAttack);
			hcLife -= palpatineAttack;
			$("#hcLifeNum").html(hcLife);
			if (hcLife < 0 ){
				$('#hc').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (palpatineLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "vadar" && defendingCharacter == "luke"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			vadarLife -= lukeAttack;
			$("#vadarLifeNum").html(vadarLife);
			vadarAttack += 7;
			$("#vadarAttackNum").html(vadarAttack);
			lukeLife -= vadarAttack;
			$("#lukeLifeNum").html(lukeLife);
			if (lukeLife < 0 ){
				$('#luke').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (vadarLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}


		if (characterSelected == "vadar" && defendingCharacter == "hc"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Vadar");
			vadarLife -= hcAttack;
			$("#vadarLifeNum").html(vadarLife);
			vadarAttack += 7;
			$("#vadarAttackNum").html(vadarAttack);
			hcLife -= vadarAttack;
			$("#hcLifeNum").html(hcLife);
			if (hcLife < 0 ){
				$('#hc').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (vadarLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "vadar" && defendingCharacter == "trooper"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Trooper")
			vadarLife -= trooperAttack;
			$("#vadarLifeNum").html(vadarLife);
			vadarAttack += 7;
			$("#vadarAttackNum").html(vadarAttack);
			trooperLife -= vadarAttack;
			$("#trooperLifeNum").html(trooperLife);
			if (trooperLife < 0 ){
				$('#trooper').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (vadarLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "vadar" && defendingCharacter == "palpatine"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			vadarLife -= palpatineAttack;
			$("#vadarLifeNum").html(vadarLife);
			vadarAttack += 7;
			$("#vadarAttackNum").html(vadarAttack);
			palpatineLife -= vadarAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			if (palpatineLife < 0 ){
				$('#palpatine').remove();
				selectDefender();
				defendingCharacter = "";
				$("#victoryImage").html()
			}
			if (vadarLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "trooper" && defendingCharacter == "luke"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			trooperLife -= lukeAttack;
			$("#trooperLifeNum").html(trooperLife);
			trooperAttack += 7;
			$("#trooperAttackNum").html(trooperAttack);
			lukeLife -= trooperAttack;
			$("#lukeLifeNum").html(lukeLife);
			$("#lukeLifeBar").css("lukeLifeBar", )
			if (lukeLife < 0 ){
				$('#luke').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (trooperLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}


		if (characterSelected == "trooper" && defendingCharacter == "vadar"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Vadar");
			trooperLife -= vadarAttack;
			$("#hcLifeNum").html(hcLife);
			hcAttack += 7;
			$("#trooperAttackNum").html(trooperAttack);
			vadarLife -= trooperAttack;
			$("#vadarLifeNum").html(vadarLife);
			if (vadarLife < 0 ){
				$('#vadar').remove();
				//$('#fight_button').off();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (trooperLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "trooper" && defendingCharacter == "hc"){
			//console.log("(2) Character Selected = Han and Chewy and Defending Character = Trooper")
			trooperLife -= hcAttack;
			$("#trooeprLifeNum").html(trooperLife);
			trooperAttack += 7;
			$("#trooperAttackNum").html(trooperAttack);
			hcLife -= trooperAttack;
			$("#hcLifeNum").html(hcLife);
			if (hcLife < 0 ){
				$('#hc').remove();
				$('#selectEnemy').on("click");
				selectDefender();
				defendingCharacter = "";
			}
			if (trooperLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

		if (characterSelected == "trooper" && defendingCharacter == "palpatine"){
			//console.log("(1) Character Selected = Han and Chewy and Defending Character = Luke")
			trooperLife -= palpatineAttack;
			$("#trooperLifeNum").html(trooperLife);
			trooperAttack += 7;
			$("#trooperAttackNum").html(trooperAttack);
			palpatineLife -= trooperAttack;
			$("#palpatineLifeNum").html(palpatineLife);
			$("#victory").html("You attacked: " + defendingCharacter + " for " + trooperAttack+".");
			if (palpatineLife < 0 ){
				$("#victory").html("You defeated Emperor Palpatine!");
				$('#palpatine').remove();
				selectDefender();
				defendingCharacter = "";
			}
			if (trooperLife < 1 ){
				$("#victory").html("YOU LOSE! Reloading page.");
				reLoad = setTimeout(function(){location.reload()}, 2000);
			}
			ShowStats()
		}

	});
});
