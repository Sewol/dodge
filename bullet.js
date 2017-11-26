
function Bullet(x, y, target_x, target_y) {
	this.half_width = 8;
	this.half_height = 8;
	this.x = x;
	this.y = y;
	this.target_x = target_x;
	this.target_y = target_y;
	//
	this.move_speed = 6; // 8

	// calc heading
	var dx = this.target_x - this.x;
	var dy = this.target_y - this.y;
	var distance = Math.sqrt(dx*dx + dy*dy);
	var moves = distance / this.move_speed;
	//
	this.vx = (this.target_x - this.x)/moves;
	this.vy = (this.target_y - this.y)/moves;
}

Bullet.prototype.update = function () {
	this.x = Math.floor(this.x + this.vx);
	this.y = Math.floor(this.y + this.vy);
	//
	//if (Math.abs(this.x - Players[0].x) <= 3 && Math.abs(this.y - Players[0].y) <= 3) { // if we've hit the player
		//
		// returns 2 ?
	//}
	if (this.x > ctx.canvas.width || this.x < 0 || this.y > ctx.canvas.height || this.y < 0) { // out of bounds check
		return 1;
	}
	return 0; // all good
}

Bullet.prototype.draw = function () {
	ctx.drawImage(bullet_img, this.x - this.half_width, this.y - this.half_height);
	// ctx.drawImage(this.img, this.x - this.half_width, this.y - this.half_height);
}
