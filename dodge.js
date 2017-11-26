
var Players = new Array;
var start_time = 0;
var msec_frame = 30; // framerate
var wtime = 0;
var seconds = 0;
var dead_seconds = 0;
// canvas info
var mid_x = 0;
var mid_y = 0;

var bullet_img = new Image();
bullet_img.src = 'bullet.png';
var ghost_img = new Image();
ghost_img.src = 'ghost.png';

var Bullets = new Array;
var dead_bullets = new Array;

var Waves = new Array;
var dead_waves = new Array;

var Animations = new Array;
var dead_animations = new Array;

function init() {
	canvas = document.getElementById('canvas');
	html = document.getElementById('html');
	ctx = canvas.getContext('2d');
	
	// ctx.canvas.width = 400;
	// ctx.canvas.height = 800;
	ctx.canvas.width = html.clientWidth;
	ctx.canvas.height = html.clientHeight;

	mid_x = canvas.width/2;
	mid_y = canvas.height/2;
	
	Players.push(new Player(mid_x, mid_y)); // create the player

	generate_waves(); // generate the waves
	
	start_time = setInterval("timed_count();", msec_frame); //timer
}
function game_reset() {
	wtime = 0; // clear all counters and object arrays
	seconds = 0;
	dead_seconds = 0;
	Bullets = new Array;
	dead_bullets = new Array;
	Waves = new Array;
	dead_waves = new Array;
	Animations = new Array;
	dead_animations = new Array;
	clearInterval(start_time); // clear the main loop
	Players[0].is_alive = true;
	init();
}

//The Main loop
function timed_count() {
	update();
	draw();
}

function update() {
	if (Players[0].is_alive == false) {
		// game_reset(); // need to show some kind of animation first
		wtime++;
		dead_seconds = Math.floor(wtime/30);
	} else { // normal update behaviour
		update_bullets();
		update_animations();
		update_waves();
		Players[0].update();
		wtime++;
		seconds = Math.floor(wtime/30);
		// console.log(wtime/30);
	}
}
function update_bullets() {
	for (var i = 0; i < Bullets.length; i++) {
		if (Bullets[i].update() == 1) {
			dead_bullets.push(i);
		// } else if (Math.abs(Bullets[i].x - Players[0].x) <= 5 && Math.abs(Bullets[i].y - Players[0].y) <= 5) {
		} else if (Bullets[i].x > Players[0].x - 10 && Bullets[i].x < Players[0].x + 10
			&& Bullets[i].y > Players[0].y - 10 && Bullets[i].y < Players[0].y + 10) {
			Players[0].is_alive = false; //
		}
	}
	for (var i = dead_bullets.length - 1; i >= 0;  i--) {
    	Bullets.splice(dead_bullets[i], 1);
    }
    dead_bullets.splice(0, dead_bullets.length);
	//
}
function update_animations() {
	for (var i = 0; i < Animations.length; i++) {
		if (Animations[i].update() == 1) {
			dead_animations.push(i);
		}
	}
	for (var i = dead_animations.length - 1; i >= 0;  i--) {
    	Animations.splice(dead_animations[i], 1);
    }
    dead_animations.splice(0, dead_animations.length);
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
	draw_animations();
	Players[0].draw();
	if (Players[0].is_alive == false) {
		draw_gameover();
	} else {
		draw_score();
	}
}
function draw_bullets() {
	for (var i = 0; i < Bullets.length; i++) {
		Bullets[i].draw();
	}
}
function draw_animations() {
	for (var i = 0; i < Animations.length; i++) {
		Animations[i].draw();
	}
}
function draw_score() {
	ctx.fillText('Score: ' + seconds, 3, 10);
}
function draw_gameover() {
	ctx.fillStyle = '#FF0000';
	ctx.fillRect(mid_x-22, mid_y-52, 60, 15);
	ctx.fillRect(mid_x-22, mid_y-32, 78, 15);
	ctx.fillStyle = '#000000';
	ctx.fillText('Game Over', mid_x-20, mid_y-40);
	ctx.fillText('Final Score: ' + seconds, mid_x-20, mid_y-20);
}