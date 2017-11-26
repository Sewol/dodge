
function Player(x, y) {
	//
	this.half_width = 16;
	this.half_height = 16;
	this.x = x;
	this.y = y;
	this.img = new Image();
	this.img.src =  'player.png';
	//
	this.moving = false;
	this.target_x = 0;
	this.target_y = 0;
	//
	this.is_alive = true;
	//
	this.move_speed = 12;
	this.dir = 1; // facing, 1 for right, -1 for left
}

Player.prototype.draw = function() {
	if (this.dir == -1) {
		ctx.drawImage(this.img, 32, 0, 32, 32, this.x - this.half_width, this.y - this.half_height, 32, 32);
	} else {
		ctx.drawImage(this.img, 0, 0, 32, 32, this.x - this.half_width, this.y - this.half_height, 32, 32);
	}
}
Player.prototype.update = function() {
	if (this.moving) {
		var dx = this.target_x - this.x;
		var dy = this.target_y - this.y;
		var distance = Math.sqrt(dx*dx + dy*dy);
		var moves = distance / this.move_speed;
		//
		var x_step = (this.target_x - this.x)/moves;
		var y_step = (this.target_y - this.y)/moves;
		//
		this.x = Math.floor(this.x + x_step);
		this.y = Math.floor(this.y + y_step);
		//
		if (Math.abs(this.x-this.target_x) < 10 && Math.abs(this.y-this.target_y) < 10) {
			this.moving = false;
		}
	}
}
Player.prototype.get_velocity_x = function() {
	if (this.target_x > this.x) return 1;
	else if (this.target_x < this.x) return -1;
	else return 0;
}
Player.prototype.get_velocity_y = function() {
	if (this.target_y > this.y) return 1;
	else if (this.target_y < this.y) return -1;
	else return 0;
}

function get_key_down(event) {
	// not used?
}
function get_key_up(event) {
	// not used?
}
function get_mouse(event) {
	// not used?
}
function get_screen_scroll() {
	// not used, not needed?
}
function get_click(event) {
	// console.log(event);
	if (Players[0].is_alive == false) {
		if (dead_seconds - seconds > 1) game_reset(); // click resets game if dead (and 1 second passed)
	} else {
		Players[0].moving = true;
		Players[0].target_x = event.clientX - canvas.offsetLeft;
		Players[0].target_y = event.clientY - canvas.offsetTop;
		
		// set player facing
		if (Players[0].target_x < Players[0].x) {
			Players[0].dir = -1; // moving left
		} else if (Players[0].target_x > Players[0].x) {
			Players[0].dir = 1; // moving right
		}
	}
	//
}