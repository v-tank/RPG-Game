class Character {
	constructor(name, hp, attackPower, counterAttackPower, image) {
		this.name = name;
		this.hp = hp;
		this.attackPower = attackPower;
		this.counterAttackPower = counterAttackPower;
    this.image = image;
	}

	attack() {
		console.log("Your character has attacked the opponent!");
	}
}

var squirtle = new Character("Squirtle", 45, 48, 10, "assets/images/squirtle.jpg");
var charmander = new Character("Charmander", 39, 52, 12, "assets/images/charmander.jpg");
var pikachu = new Character("Pikachu", 35, 55, 8, "assets/images/pikachu.jpg");
var bulbasaur = new Character("Bulbasaur", 45, 49, 9, "assets/images/bulbasaur.jpg");
var array = [squirtle, charmander, pikachu, bulbasaur];
var divToAppend = '';

function mainGame(){

	generateCharacters();

	$(".char-image").on("click", function() {

    // Inside the on-click event...

    if ($("#yourChar").is(':empty')) {
      console.log("in 'if'");
      $("#charText").text("");

      // For each iteration, this will create a new image
      // divToAppend = '<div class="col-lg-3"> <div class="card"> <center><img class="card-img-top char-image" src="'+$(this)["image"]+'" alt="Card image cap"></center> <div class="card-body"> <h5 class="card-title">'+array[i]["name"]+'</h5> <p class="card-text"><small class="text-muted">'+array[i]["hp"]+'</small></p> </div> </div> </div>'

      $("#yourChar").append(divToAppend);
  
      $(this).addClass("hidden");
    }

    else {
      while ($("#enemy").is(':empty')) {
      console.log("in 'else'");
      $("#enemyText").text("");
      var enemy = $("<img>");

      enemy.addClass("char-image");

      enemy.attr('src', $(this).attr("src"));

      $("#enemy").append(enemy);
      $(this).addClass("hidden");
      }
    }
	});

	
}

function reset(){

}

function generateCharacters() {
	// var squirtle = new Character("Squirtle", 50, 10, 10);
	// var charmander = new Character("charmander", 50, 10, 10);
	// var pikachu = new Character("Pikachu", 50, 10, 10);
	// var bulbasaur = new Character("Bulbasaur", 50, 10, 10);
 //  var array = [squirtle, charmander, pikachu, bulbasaur];

	// console.log(squirtle);
	// console.log(charmander);
	// console.log(pikachu);
	// console.log(bulbasaur);
  console.log(array);
	imgsGenerator();
}

function imgsGenerator() {

  // runs through a 'for-loop' to generate 4 images and assigns 4 random numbers for each crystal
  for (var i = 0; i < array.length; i++) {

    // For each iteration, this will create a new image
    divToAppend = '<div class="col-lg-3"> <div class="card"> <center><img class="card-img-top char-image" src="'+array[i]["image"]+'" alt="Card image cap"></center> <div class="card-body"> <h5 class="card-title">'+array[i]["name"]+'</h5> <p class="card-text"><small class="text-muted">'+array[i]["hp"]+'</small></p> </div> </div> </div>'

    $("#chars").append(divToAppend);
  }
}

mainGame();