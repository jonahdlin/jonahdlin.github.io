$(document).ready(function() {
	$("#about_mm").click(function(){
		$("#about_content").slideToggle();
		if($(this).html() == '<p id="about_mm_p">-</p>'){
			$(this).html('<p id="about_mm_p">+</p>');
		} else {
			$(this).html('<p id="about_mm_p">-</p>');
		}
	});

	$("#resume_mm").click(function(){
		$("#resume_content").slideToggle();
		if($(this).html() == '<p id="resume_mm_p">-</p>'){
			$(this).html('<p id="resume_mm_p">+</p>');
		} else {
			$(this).html('<p id="resume_mm_p">-</p>');
		}
	});
	
	$("#projects_mm").click(function(){
		$("#projects_content").slideToggle();
		if($(this).html() == '<p id="projects_mm_p">-</p>'){
			$(this).html('<p id="projects_mm_p">+</p>');
		} else {
			$(this).html('<p id="projects_mm_p">-</p>');
		}
	});

	$("#contact_mm").click(function(){
		$("#contact_content").slideToggle();
		if($(this).html() == '<p id="contact_mm_p">-</p>'){
			$(this).html('<p id="contact_mm_p">+</p>');
		} else {
			$(this).html('<p id="contact_mm_p">-</p>');
		}
	});

	$(".project_button").hover(function(){
		$("#" + this.id + "_slide").slideToggle();
	});

	$(".project_button").click(function(){
		window.location.href = "jonahdlin.com/" + this.id;
	});
});