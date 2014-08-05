var vibrateInfinite;

// Starts vibration
function doVibrate(_duration) {
	window.navigator.vibrate(_duration);
}

// Stops vibration
function stopVibrate() {
	if(vibrateInfinite) {
		clearInterval(vibrateInfinite);
	}
	window.navigator.vibrate(0);
}

//Infinte vibration
function startInfiniteVibration(_duration, _interval) {
	if(vibrateInfinite) {
			clearInterval(vibrateInfinite);
		}
	window.navigator.vibrate(0);

	window.navigator.vibrate(_duration	);
	var interval = parseInt(_interval, 10) +parseInt(_duration, 10); //calculate interval that would be setInterval
	vibrateInfinite = setInterval(function() {
		doVibrate(_duration);
	}, interval);
}

$(document).ready(function(){
	$("#vibrationButton").click(function() {
		if(vibrateInfinite) {
			clearInterval(vibrateInfinite);
		}
		window.navigator.vibrate(0);
		var duration = $("#duration").val();
		var interval = $("#interval").val();
		var repeat = $("#repeat").val();
		duration = parseInt(duration, 10);
		interval = parseInt(interval, 10);
		repeat = parseInt(repeat, 10);
		startInfiniteVibration(duration, interval);
	});

	$("#stopVibButton").click(function() {
		stopVibrate();
	});
});
