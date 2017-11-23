
function Wave(x, y, time, wave_type) {
	this.x = x;
	this.y = y;
	this.time = time;
	this.wave_type = wave_type;
}

Wave.prototype.fire = function() {
	//
	if (this.wave_type=='flower') {
		Bullets.push(new Bullet(this.x, this.y,  this.x + 10, this.y));
		Bullets.push(new Bullet(this.x, this.y,  this.x + 10, this.y + 10));
		Bullets.push(new Bullet(this.x, this.y,  this.x, this.y - 10));
		Bullets.push(new Bullet(this.x, this.y,  this.x + 10, this.y - 10));
		Bullets.push(new Bullet(this.x, this.y,  this.x - 10, this.y));
		Bullets.push(new Bullet(this.x, this.y,  this.x - 10, this.y + 10));
		Bullets.push(new Bullet(this.x, this.y,  this.x, this.y + 10));
		Bullets.push(new Bullet(this.x, this.y,  this.x - 10, this.y - 10));
	} else if (this.wave_type=='spiral') {
		//
	} else if (this.wave_type=='cone') {
		var px = Players[0].x;
		var py = Players[0].y;
		var px_d = (px > this.x ? 1 : -1);
		var py_d = (py > this.y ? 1 : -1);
		Bullets.push(new Bullet(this.x, this.y,  px, py)); // directly at the player
		Bullets.push(new Bullet(this.x, this.y,  px + 40, py));
		Bullets.push(new Bullet(this.x, this.y,  px, py + 40));
		Bullets.push(new Bullet(this.x, this.y,  px - 40, py));
		Bullets.push(new Bullet(this.x, this.y,  px, py - 40));
	}
}