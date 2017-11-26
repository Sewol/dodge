
// class for the generic animation

function Animation(x, y, anim_type) {
	this.x = x;
	this.y = y;
	this.anim_type = anim_type
	//
	this.img = new Image();
	this.sx = 0; // draw coordinates
	this.sy = 0;
	this.width = 32;
	this.height = 32;
	// this.created = seconds; // the second this was created
	this.created = (wtime / msec_frame); // the milisecond this was created
	this.lifetime = 0; // active for 0 seconds
	//
	if (this.anim_type == 'puff') { // puff indicating incoming bullets
		// explosion_anim
		this.img.src = 'explosion_anim.png';
		this.frames = 4;
		this.width = 64;
		this.height = 64;
		this.frame_width = 64;
		this.frame_height = 64;
		this.frame_speed = 0.25; // seconds each frame is shown
		//
	} else if (this.anim_type == 'expl') { // explosion on player hit
		//
	}
	this.half_width = this.width / 2;
	this.half_height = this.height / 2;
}
Animation.prototype.update = function () {
	
	this.lifetime = (wtime / msec_frame); // set to the new fractions of a second
	
	var time = this.frames * this.frame_speed;

	var current_frame = Math.floor((this.lifetime-this.created) / (time*this.frame_speed));
	
	if (current_frame > 4) { // if timed out indicate dead anim
		return 1;
	} else {
		this.sx = current_frame * this.width;
		return 0;
	}
}
Animation.prototype.draw = function () {
	//
	ctx.drawImage(this.img,
		this.sx, this.sy, this.frame_width, this.frame_height,
		this.x - this.half_width, this.y - this.half_height,
		this.width, this.height);
}
