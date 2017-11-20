
var Players = new Array;
var msec_frame = 30; // framerate
var wtime = 0;
var seconds = 0;

var bullet_img = new Image();
bullet_img.src = 'bullet.png';
var ghost_img = new Image();
ghost_img.src = 'ghost.png';

var Bullets = new Array;
var dead_bullets = new Array;

var Waves = new Array;
var dead_waves = new Array;

function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	ctx.canvas.width = 400;
	ctx.canvas.height = 800;

	var mid_x = canvas.width/2;
	var mid_y = canvas.height/2;
	
	Players.push(new Player(mid_x, mid_y)); // create the player

	Waves.push(new Wave(mid_x - 100, mid_y, 3, 'flower'));
	Waves.push(new Wave(mid_x - 10, mid_y - 200, 5, 'flower'));
	//
	Waves.push(new Wave(0, 0, 8, 'cone'));
	Waves.push(new Wave(canvas.width, 0, 9, 'cone'));
	Waves.push(new Wave(0, canvas.height, 10, 'cone'));
	Waves.push(new Wave(canvas.width, canvas.height, 11, 'cone'));

	// Bullets.push(new Bullet(mid_x, mid_y,  mid_x, mid_y-3));
	
	start_time = setInterval("timed_count();", msec_frame); //timer
}

//The Main loop
function timed_count() {
	update();
	draw();
}

function update() {
	//
	update_bullets();
	update_waves();
	Players[0].update();
	wtime++;
	seconds = Math.floor(wtime/30);
	// console.log(wtime/30);
}
function update_bullets() {
	for (var i = 0; i < Bullets.length; i++) {
		if (Bullets[i].update() == 1) {
			dead_bullets.push(i);
		}
	}
	for (var i = dead_bullets.length - 1; i >= 0;  i--) {
    	Bullets.splice(dead_bullets[i], 1);
    }
    dead_bullets.splice(0, dead_bullets.length);
	//
}
function update_waves() {
	// check all the waves for any ready to fire
	// var time = seconds; // Math.floor(wtime / 30);
	for (var i = 0; i < Waves.length; i++) {
		if (Waves[i].time == seconds) {
			Waves[i].fire();
			dead_waves.push(i);
		}
	}
	for (var i = dead_waves.length - 1; i >= 0;  i--) {
    	Waves.splice(dead_waves[i], 1);
    }
    dead_waves.splice(0, dead_waves.length);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw_bullets();
	Players[0].draw();
	draw_score();
}
function draw_bullets() {
	for (var i = 0; i < Bullets.length; i++) {
		Bullets[i].draw();
	}
}
function draw_score() {
	ctx.fillText('Score: ' + seconds, 3, 10);
}