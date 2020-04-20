$("#gisaActive").click(function() {
	$("#chatGisa").removeClass("none");
});

$("#gisaClose").click(function() {
	$("#chatGisa").addClass("none");
});

setTimeout(function() {
	$("#tooltipsGisa").addClass("visibilityOn");
}, 5000);

setTimeout(function() {
	$("#tooltipsGisa").removeClass("visibilityOn");
}, 15000);