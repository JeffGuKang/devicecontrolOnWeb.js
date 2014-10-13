var thresholdOfShake= 4.7;

function shakeRecongnizerOn() {
	window.addEventListener("devicemotion", shake(event));
}

function shakeRecongnizerOff() {
	window.removeEventListener("devicemotion", shake(event));
}

function shakeRecognizer(x, y, z) {
	var sqrtResult = Math.sqrt(x^2 + y^2 + z^2);

	x = x.toFixed(3);
	y = y.toFixed(3);
	z = z.toFixed(3);
	sqrtResult = sqrtResult.toFixed(3);

	$("#accelX").html('x:' + x);
	$("#accelY").html('y:' + y);
	$("#accelZ").html('z:' + z);
	$("#filterResult").html(sqrtResult);

	if(sqrtResult > thresholdOfShake) {
		return true;
	}
	else
		return false;
}

function shake(event) {
	var x = event.acceleration.x;
	var y = event.acceleration.y;
	var z = event.acceleration.z;
	if(shakeRecognizer(x, y, z)) {
		return true; //true is shaked.
	}
	else {
		return false;
	}
}


//window.removeEventListener("devicemotion", function(event) {
//
//}, true);
