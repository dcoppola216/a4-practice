$(document).ready(function() {

	$("p").hide();

	$("#kitty").hide();

	$("h1").click(function() {
		$(this).next().fadeToggle(1000);

	});

	/*start of jq02 how to use buttons and selectors*/
	$("#testbutton").click(function() {
		/*$("#jq02").css("background-color", "#0000ff");*/
$("strong").css("background-color", "#0000ff");
	});

});
