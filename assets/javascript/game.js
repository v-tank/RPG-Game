class Character {
	constructor(name, hp, attackPower, counterAttackPower, image) {
		this.name = name;
		this.hp = hp;
		this.attackPower = attackPower;
		this.counterAttackPower = counterAttackPower;
    this.image = image;
	}

	attack() {
		console.log(this.name + " has attacked the opponent!");
	}
}

var squirtle = new Character("Squirtle", 45, 48, 10, "assets/images/squirtle.jpg");
var charmander = new Character("Charmander", 39, 52, 12, "assets/images/charmander.jpg");
var pikachu = new Character("Pikachu", 35, 55, 8, "assets/images/pikachu.jpg");
var bulbasaur = new Character("Bulbasaur", 45, 49, 9, "assets/images/bulbasaur.jpg");
var array = [squirtle, charmander, pikachu, bulbasaur];
var divToAppend = '';
var spotsFilled = false;
var myChar;
var enemy;
// var arrayOfDivs = [];

function mainGame(){

	generateCharacters();

  	$("#chars #pokemon").on("click", function() {
      // console.log(arrayOfDivs);
      // Inside the on-click event...

      if ($("#yourChar").is(':empty')) {
        console.log("in 'if'");
        $("#charText").text("");
        myChar = this;
        console.log(myChar);
        $("#yourChar").append(this);
      }

      else {
        while ($("#enemy").is(':empty')) {
        console.log("in 'else'");
        $("#enemyText").text("");
        

        $("#enemy").append(this);
        enemy = this;
        spotsFilled = true;
        $("button").removeClass("hidden");
        }
      }
  	});

    $("button").on("click", function() {
      
      if ($("#yourChar div").hasClass('Squirtle')) {
        squirtle.attack();
        fight();
      }
      else if ($("#yourChar div").hasClass('Charmander')) {
        charmander.attack();
      }
      else if ($("#yourChar div").hasClass('Pikachu')) {
        pikachu.attack();
      }
      else if ($("#yourChar div").hasClass('Bulbasaur')) {
        bulbasaur.attack();
      }
    });

}

function reset(){

}

function fight() {
  console.log($("#enemy").hp);
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
    divToAppend = '<div class="col '+array[i]["name"]+'" id="pokemon"> <div class="card"> <center><img class="card-img-top char-image" src="'+array[i]["image"]+'" alt="Pokemon image"></center> <div class="card-body"> <h5 class="card-title">'+array[i]["name"]+'</h5> <p class="card-text">'+array[i]["hp"]+'</p> </div> </div> </div>'

    // arrayOfDivs.push(divToAppend);

    $("#chars").append(divToAppend);
  }
}

mainGame();