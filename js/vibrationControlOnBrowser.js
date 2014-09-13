var vibrateInfinite;
var count;
var numberOfVibration;

// Starts vibration
function doVibrate(_duration) {
	window.navigator.vibrate(_duration);
	count++;
	checkVibrationCount();
}


function checkVibrationCount() {
	$("#count").text(count);
	if (numberOfVibration > 0 && count >= numberOfVibration) {
		stopVibrate();
	}
}

// Stops vibration
function stopVibrate() {
	if(vibrateInfinite) {
		clearInterval(vibrateInfinite);
	}
	// window.navigator.vibrate(0);
}

//Infinte vibration
function startInfiniteVibration(_duration, _interval, _numberoftime) {
	if(vibrateInfinite) {
			clearInterval(vibrateInfinite);
		}
	window.navigator.vibrate(0);

	count = 0;
	numberOfVibration = _numberoftime;
	doVibrate(_duration);
	var interval = parseInt(_interval, 10) + parseInt(_duration, 10); //calculate interval that would be setInterval
	vibrateInfinite = setInterval(function() {
		doVibrate(_duration);
	}, interval);
}
