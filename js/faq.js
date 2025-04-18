// faq
$(document).ready(function() {
	// Make the first dd active on load and show its corresponding dt
	var firstDD = $('.faq_wrap dl:first-child dt');
	var firstDT = firstDD.next('dd');
	firstDD.addClass('active');
	firstDT.show();

	// Click event for dd elements
	$('.faq_wrap dt').click(function() {
		var $this = $(this);
		var $dt = $this.next('dd');

		// Check if the clicked dd is already active
		if ($this.hasClass('active')) {
			// If it is, remove active class and hide its dt
			$this.removeClass('active');
			$dt.slideUp();
		} else {
			// Add active class to the clicked dd and show the corresponding dt
			$this.addClass('active');
			$dt.slideDown();
		}
	});
});