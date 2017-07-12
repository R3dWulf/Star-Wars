//--variables go here------------
var hcLife = 180;
var hcAttack = 12;

var lukeLife = 190;
var lukeAttack = 15;

var palpatineLife = 250
var palpatineAttack = 25;

var vadarLife = 225
var vadarAttack = 20;

var trooperLife = 100;
var trooperAttack = 8;

var winCounter = 0;


var hcVictorySound = new Audio();
var lukeVictorySound = new Audio();
var palpatineVictorySound = new Audio();
var vadarVictorySound = new Audio();
var trooperVictorySound = "HAHAHAHAHA, they never win!";


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


	// On click to select Han and Chewy, all others will go the the Select Enemy Section using .appendTo() and .addClass()
	// will change background to red and border color to black
	// Selecting an enemy will add the character the user wants to be to the select character to attack div
	// This character must to sent back.
	$('#hc').on("click", function(){
			$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#luke').on("click", function(){
					$('#hc').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
					$('#luke').appendTo("#attackEnemy");
					$('#fight_button').on("click", function(){
							$("#hcLifeNum").html(hcLife -= lukeAttack);
							$("#hcAttackNum").html(hcAttack += 7);//parseInt(hcAttack * .28) );
							$("#lukeLifeNum").html(lukeLife -= hcAttack);
							if (lukeLife < 0 ){
								$('#luke').detach();
								$('#fight_button').off();
								winCounter++;
								console.log(winCounter);
							}
					});			
			});

			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').on("click", function(){
					$('#hc').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
					$('#palpatine').appendTo("#attackEnemy");
					$('#fight_button').on("click", function(){
					$("#hcLifeNum").html(hcLife -= palpatineAttack);
							$("#hcAttackNum").html(hcAttack += 10);//parseInt(hcAttack * .2) );
							$("#palpatineLifeNum").html(palpatineLife -= hcAttack);
							if (palpatineLife <= 0 ){
								$('#palpatine').detach();
								$('#fight_button').off();
								winCounter++;
								console.log(winCounter);	
							}
					});			
			});

			$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').on("click", function(){
					$('#hc').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
					$('#vadar').appendTo("#attackEnemy");
					$('#fight_button').on("click", function(){
							$("#hcLifeNum").html(hcLife -= vadarAttack);
							$("#hcAttackNum").html(hcAttack += 9); //parseInt(hcAttack * .2) );
							$("#vadarLifeNum").html(vadarLife -= hcAttack);
							if (vadarLife < 0 ){
								$('#vadar').detach();
								$('#fight_button').off();
								winCounter++;
								console.log(winCounter);
								}
					});			
			});
			$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#trooper').on("click", function(){
					$('#hc').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
					$('#trooper').appendTo("#attackEnemy");
					$('#fight_button').on("click", function(){
							$("#hcLifeNum").html(hcLife -= trooperAttack);
							$("#hcAttackNum").html(hcAttack += 7);//parseInt(hcAttack * .28) );
							$("#trooperLifeNum").html(trooperLife -= hcAttack);
							if (trooperLife < 0 ){
								$('#trooper').detach();
								$('#fight_button').off();
								winCounter++;
								console.log(winCounter);
							}
					});			
			});
	// End Han and Chewy
	});



	//On click to select Luke, all others will go the the Select Enemy Section.
	$('#luke').on("click", function(){
			$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#hc').on("click", function(){
					$('#luke').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
					$('#hc').appendTo("#attackEnemy");
					$('#fight_button').on("click", function(){
							$("#lukeLifeNum").html(lukeLife -= hcAttack);
							$("#lukeAttackNum").html(lukeAttack += parseInt(lukeAttack * .2) );
							$("#hcLifeNum").html(hcLife -= lukeAttack);
							if (hcLife < 0 ){
									$('#hc').detach();
									$('#fight_button').off();
							}
					});		
			});
			$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').on("click", function(){
			$('#luke').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#palpatine').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#lukeLifeNum").html(lukeLife -= palpatineAttack);
				$("#lukeAttackNum").html(lukeAttack += parseInt(lukeAttack * .23) );
				$("#palpatineLifeNum").html(palpatineLife -= lukeAttack);
				if (palpatineLife < 0 ){
					$('#palpatine').detach();
					$('#fight_button').off();
				}
			});					

		});
		$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#vadar').on("click", function(){
			$('#luke').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#vadar').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#lukeLifeNum").html(lukeLife -= vadarAttack);
				$("#lukeAttackNum").html(lukeAttack += parseInt(lukeAttack * .2) );
				$("#vadarLifeNum").html(vadarLife -= lukeAttack);
				// console.log("lukeLife: " + lukeLife + " lukeAttack: " + lukeAttack);
				if (vadarLife < 0 ){
					$('#vadar').detach();
					$('#fight_button').off();
				}
			});					
		});
		$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#trooper').on("click", function(){
			$('#luke').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#trooper').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#lukeLifeNum").html(lukeLife -= trooperAttack);
				$("#lukeAttackNum").html(lukeAttack += parseInt(lukeAttack * .2) );
				$("#trooperLifeNum").html(trooperLife -= lukeAttack);
				if (trooperLife < 0 ){
					$('#trooper').detach();
					$('#fight_button').off();
				}
			});					
		});
	// End Luke
	});

	//On click to select Emperor Palpatine, all others will go the the Select Enemy Section.
	$('#palpatine').on("click", function(){
		$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#hc').on("click", function(){
			$('#palpatine').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#hc').appendTo("#attackEnemy");			
			$('#fight_button').on("click", function(){
				$("#palpatineLifeNum").html(palpatineLife -= hcAttack);
				$("#palpatineAttackNum").html(palpatineAttack += parseInt(palpatineAttack * .2) );
				$("#hcLifeNum").html(hcLife -= palpatineAttack);
				if (hcLife < 0 ){
					$('#hc').detach();
					$('#fight_button').off();
				}
			});			
		});
		$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#luke').on("click", function(){
			$('#palpatine').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#luke').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#palpatineLifeNum").html(palpatineLife -= lukeAttack);
				$("#palpatineAttackNum").html(palpatineAttack += parseInt(palpatineAttack * .2) );
				$("#lukeLifeNum").html(lukeLife -= palpatineAttack);
				if (palpatineLife < 0 ){
					$('#luke').detach();
					$('#fight_button').off();
				}
			});			
		});			
		$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#vadar').on("click", function(){
			$('#palpatine').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#vadar').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#palpatineLifeNum").html(palpatineLife -= vadarAttack);
				$("#palpatineAttackNum").html(palpatineAttack += parseInt(palpatineAttack * .2) );
				$("#vadarLifeNum").html(vadarLife -= palpatineAttack);
				if (vadarLife < 0 ){
					$('#vadar').detach();
					$('#fight_button').off();
				}
			});			
		});			

		$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#trooper').on("click", function(){
			$('#palpatine').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#trooper').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#palpatineLifeNum").html(palpatineLife -= trooperAttack);
				$("#palpatineAttackNum").html(palpatineAttack += parseInt(palpatineAttack * .2) );
				$("#trooperLifeNum").html(trooperLife -= palpatineAttack);
				if (trooperLife < 0 ){
					$('#trooper').detach();
					$('#fight_button').off();
				}
			});							
		});
	// End Palpatine
	});

	//On click to select Darth Vadar, all others will go the the Select Enemy Section.
	$('#vadar').on("click", function(){
		$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#hc').on("click", function(){
			$('#vadar').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#hc').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#vadarLifeNum").html(vadarLife -= hcAttack);
				$("#vadarAttackNum").html(vadarAttack += parseInt(vadarAttack * .2) );
				$("#hcLifeNum").html(hcLife -= vadarAttack);
				if (hcLife < 0 ){
					$('#hc').detach();
					$('#fight_button').off();
				}
			});					
		});
		$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#luke').on("click", function(){
			$('#vadar').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#luke').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#vadarLifeNum").html(vadarLife -= lukeAttack);
				$("#vadarAttackNum").html(vadarAttack += parseInt(vadarAttack * .2) );
				$("#lukeLifeNum").html(lukeLife -= vadarAttack);
				if (lukeLife < 0 ){
					$('#luke').detach();
					$('#fight_button').off();
				}
			});			

		});
		$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#palpatine').on("click", function(){
			$('#vadar').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#palpatine').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#vadarLifeNum").html(vadarLife -= palpatineAttack);
				$("#vadarAttackNum").html(vadarAttack += parseInt(vadarAttack * .2) );
				$("#palpatineLifeNum").html(palpatineLife -= vadarAttack);
				if (palpatineLife < 0 ){
					$('#palpatine').detach();
					$('#fight_button').off();
				}
			});					
		});
		$('#trooper').appendTo("#selectEnemy").addClass("select_Enemy");
		$('#trooper').on("click", function(){
			$('#vadar').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#trooper').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#vadarLifeNum").html(vadarLife -= hcAttack);
				$("#vadarAttackNum").html(vadarAttack += parseInt(vadarAttack * .2) );
				$("#trooperLifeNum").html(trooperLife -= vadarAttack);
				if (trooperLife < 0 ){
					$('#trooper').detach();
					$('#fight_button').off();
				}
			});					
		});
	// End Palpatine
	});

	//On click to select Storm Trooper, all others will go the the Select Enemy Section.
	$('#trooper').on("click", function(){
		$('#hc').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#hc').on("click", function(){
			$('#trooper').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#hc').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#trooperLifeNum").html(trooperLife -= hcAttack);
				$("#trooperAttackNum").html(trooperAttack += parseInt(trooperAttack * .2) );
				$("#hcLifeNum").html(hcLife -= trooperAttack);
				if (hcLife < 0 ){
					$('#hc').detach();
					$('#fight_button').off();
				}
			});				
		});
		$('#luke').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#luke').on("click", function(){
			$('#trooper').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#luke').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#trooperLifeNum").html(trooperLife -= lukeAttack);
				$("#trooperAttackNum").html(trooperAttack += parseInt(trooperAttack * .2) );
				$("#lukeLifeNum").html(lukeLife -= trooperAttack);
				if (lukeLife < 0 ){
					$('#luke').detach();
					$('#fight_button').off();
				}
			});				
		});
		$('#palpatine').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#palpatine').on("click", function(){
			$('#trooper').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#palpatine').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#trooperLifeNum").html(trooperLife -= palpatineAttack);
				$("#trooperAttackNum").html(trooperAttack += parseInt(trooperAttack * .2) );
				$("#palpatineLifeNum").html(palpatineLife -= trooperAttack);
				if (palpatineLife < 0 ){
					$('#palpatine').detach();
					$('#fight_button').off();
				}
			});				
		});
		$('#vadar').appendTo("#selectEnemy").addClass("select_Enemy");
			$('#vadar').on("click", function(){
			$('#trooper').detach().appendTo("#selectCharacter").removeClass("select_Enemy").addClass("test");
			$('#vadar').appendTo("#attackEnemy");
			$('#fight_button').on("click", function(){
				$("#trooperLifeNum").html(trooperLife -= vadarAttack);
				$("#trooperAttackNum").html(trooperAttack += parseInt(trooperAttack * .2) );
				$("#vadarLifeNum").html(vadarLife -= trooperAttack);
				if (vadarLife < 0 ){
					$('#vadar').detach();
					$('#fight_button').off();
				}
			});				
		});
	// End Trooper
	});
// End jQuery On Document Ready
});
