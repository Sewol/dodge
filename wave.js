
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
	} else if (this.wave_type=='puff') {
		Animations.push(new Animation(this.x, this.y, 'puff')); // puff animation
	} else if (this.wave_type=='cone') {
		var px = mid_x; // Players[0].x;
		var py = mid_y; // Players[0].y;
		// var rotate1_x, rotate1_y = rotate_coords(this.x, this.y, px, py, 30);
		var rotate1 = rotate_coords(this.x, this.y, px, py, 10);
		// var rotate2_x, rotate2_y = rotate_coords(this.x, this.y, px, py, -30);
		var rotate2 = rotate_coords(this.x, this.y, px, py, -10);
		Bullets.push(new Bullet(this.x, this.y,  px, py)); // directly at the mid // player
		Bullets.push(new Bullet(this.x, this.y,  rotate1[0], rotate1[1]));
		Bullets.push(new Bullet(this.x, this.y,  rotate2[0], rotate2[1]));
	} else if (this.wave_type=='dir') {
		Bullets.push(new Bullet(this.x, this.y,  Players[0].x, Players[0].y));
	}
}
function rotate_coords(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

function generate_waves() {
	Waves.push(new Wave(mid_x - 100, mid_y, 2, 'puff'));
	Waves.push(new Wave(mid_x - 100, mid_y, 3, 'flower'));
	Waves.push(new Wave(mid_x - 10, mid_y - 200, 4, 'puff'));
	Waves.push(new Wave(mid_x - 10, mid_y - 200, 5, 'flower'));
	//
	Waves.push(new Wave(0, 0, 8, 'cone'));
	Waves.push(new Wave(canvas.width, 0, 9, 'cone'));
	Waves.push(new Wave(0, canvas.height, 10, 'cone'));
	Waves.push(new Wave(canvas.width, canvas.height, 11, 'cone'));
	//
	// 17
	Waves.push(new Wave(mid_x - 100, mid_y - 100, 16, 'puff'));
	Waves.push(new Wave(mid_x - 100, mid_y - 100, 17, 'flower'));
	Waves.push(new Wave(mid_x + 100, mid_y - 100, 17, 'puff'));
	Waves.push(new Wave(mid_x + 100, mid_y - 100, 18, 'flower'));
	Waves.push(new Wave(mid_x - 100, mid_y + 100, 18, 'puff'));
	Waves.push(new Wave(mid_x - 100, mid_y + 100, 19, 'flower'));
	Waves.push(new Wave(mid_x + 100, mid_y + 100, 19, 'puff'));
	Waves.push(new Wave(mid_x + 100, mid_y + 100, 20, 'flower'));
	//
	// 23
	Waves.push(new Wave(mid_x, mid_y - 60, 22, 'puff'));
	Waves.push(new Wave(mid_x, mid_y - 60, 23, 'flower'));
	Waves.push(new Wave(mid_x, mid_y - 40, 23, 'puff'));
	Waves.push(new Wave(mid_x, mid_y - 40, 24, 'flower'));
	Waves.push(new Wave(mid_x, mid_y - 20, 24, 'puff'));
	Waves.push(new Wave(mid_x, mid_y - 20, 25, 'flower'));
	Waves.push(new Wave(mid_x, mid_y - 10, 25, 'puff'));
	Waves.push(new Wave(mid_x, mid_y - 10, 26, 'flower'));
	//
	// 29
	Waves.push(new Wave(10, 10 - 60, 29, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.1, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.2, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.3, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.4, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.5, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.6, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.7, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.8, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 29.9, 'dir'));
	Waves.push(new Wave(10, 10 - 60, 30, 'dir'));
}