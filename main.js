var vibrateInfinite;

// Starts vibration
function doVibrate(_duration) {
	navigator.vibrate(_duration);
}

// Stops vibration
function stopVibrate() {
	if(vibrateInterval) clearInterval(vibrateInterval);
	navigator.vibrate(0);
}

//Infinte vibration
function startInfiniteVibration(_duration, _interval) {
	vibrateInfinite = setInterval(function() {
		doVibrate(_duration);
	}, _interval);
}

$("#vibrationButton").click(function() {
	var duration = $("#duration").val();
	var interval = $("#interval").val();
	var repeat = $("#repeat").val();
	startInfiniteVibration(duration, interval);
});
