/*

//draw image 
/*let image = new Image()
image.src='test.png'
image.addEventListener('load', function(){ 
    ctx.drawImage(image, 50, 50);
})*/

/*ctx.fillStyle='orange';
roundedRect(ctx,30,30,200,40,15)
//ctx.fillRect(30,30,200,40);


ctx.fillStyle = 'white';
ctx.font='24px monospace';
ctx.textAlign='center';
ctx.textBaseline='middle';
ctx.fillText('Submit', 130,50)

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.fillStyle='orange';
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
    ctx.fill()
  }
*/

let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let bgReady = false;
let bgImage = new Image()
bgImage.onload = function(){
    bgReady = true
}
bgImage.src = './images/background.png'

let heroReady = false;
let heroImage = new Image()
heroImage.onload = function(){
    heroReady = true
}
heroImage.src = './images/hero.png'

let monsterReady = false;
let monsterImage = new Image()
monsterImage.onload = function(){
    monsterReady = true
}
monsterImage.src = 'images/monster.png'

// Game objects
let hero = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
let monster = {
	x: 0,
	y: 0
};
let monstersCaught = 0;

// Handle keyboard controls
let keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
});

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
});

// Reset the game when the player catches a monster
let reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
let update = function (modifier) {
	if (38 in keysDown && hero.y > 20) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown && hero.y < 420) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown && hero.x > 20) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown && hero.x < 460) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};

// Draw everything
let render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsterrs caught: " + monstersCaught, 32, 32);
};

// The main game loop
let main = function () {
	let now = Date.now();
	let delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
let then = Date.now();
reset();
main();
