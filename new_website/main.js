$(document).ready(function() {
	$(".leftHeaderIcon").hoverIntent(function(){
		$(this).next(".leftHeaderText").animate({width: "toggle"}, 200);
		console.log("hi");
	});
});