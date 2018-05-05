$(function() {


	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".sidebar").toggleClass('active');
		return false;
	});

	// Accordeon-----------------------------------
	$('.acordeon-link').click(function(e) {
		e.preventDefault();
		var $currentItem = $(this).closest('.acordeon-item');
		if($currentItem.hasClass('acordeon-item-with-sublist')){
			$(this).toggleClass('opened');
			$currentItem.find('.acordeon-sublist')
			.toggleClass('opened');
		}else{
			return;
		}
	});
// end Accordeon-----------------------------------

	$(".token-form").submit(function() { //Change
		$.magnificPopup.open({
			items: {
				src: $('.buy-popup')
			},
			type: 'inline',
			// mainClass: 'email-modal',
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
					
				},
			}
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
