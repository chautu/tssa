// Header fixed
// ==========================================================================
$(function () {
    var header = $("header");
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });
});

// Slide down menu on click
// ==========================================================================
$(document).ready(function () {
    const menuTrigger = $("#trigger-menu");
    const menu = $("#gnav_sp");
    const header = $("header"); // Assuming your header contains the menu

    // Toggle the mobile menu
    menuTrigger.on("click", function (e) {
        e.stopPropagation();
        const isHidden = !menu.hasClass("open");
        if (isHidden) {
            menu.addClass("open").stop(true, true).slideDown();
            $("body").addClass("menu-open");
        } else {
            menu.removeClass("open").stop(true, true).slideUp();
            $("body").removeClass("menu-open");
        }
    });

    // Close the menu when clicking outside
    $(document).on("click", function (e) {
        if (!header.is(e.target) && header.has(e.target).length === 0) {
            if (menu.hasClass("open")) {
                menu.removeClass("open").stop(true, true).slideUp();
                $("body").removeClass("menu-open");
            }
        }
    });
});

// tab link
document.addEventListener("DOMContentLoaded", function () {
	const hash = window.location.hash; // Get the hash from the URL
	if (hash) {
		// Find the corresponding tab and activate it
		const targetTab = document.querySelector(`.tab_contact a[href="${hash}"]`);
		const targetContent = document.querySelector(hash);

		if (targetTab && targetContent) {
			// Deactivate all tabs
			document.querySelectorAll(".tab_contact a").forEach(tab => tab.classList.remove("current"));
			document.querySelectorAll(".tab_contents").forEach(content => content.classList.remove("current"));

			// Activate the target tab and content
			targetTab.classList.add("current");
			targetContent.classList.add("current");
		}
	}
});

// smooth scroll
// ===============================================================================
$(document).ready(function(jQuery) {
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id="' + this.hash.slice(1) +'"]');
				if ($(window).width() > 768 ) {
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 80
						}, 800);
						return false;
					}
				} else {
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - 80
						}, 800);
						return false;
					}
				}
            }
        });
    });
});


// tab link kengaku
$(document).ready(function () {
	$('.kengaku_menu a').on('click', function (e) {
		e.preventDefault();
		
		// Remove 'current' class from all tabs and add it to the clicked tab
		$('.kengaku_menu a').removeClass('current');
		$(this).addClass('current');
		
		// Hide all tab contents and show the corresponding one
		$('.tab_content').removeClass('current');
		$($(this).attr('href')).addClass('current');
	});
});

jQuery(function () {
	var $setElem = jQuery(".switch"),
		pcName = "_pc",
		spName = "_sp",
		replaceWidth = 640;
	$setElem.each(function () {
		var $this = jQuery(this);
		function imgSize() {
			var windowWidth = parseInt(jQuery(window).width());
			if (windowWidth >= replaceWidth) {
				$this.attr("src", $this.attr("src").replace(spName, pcName)).css({ visibility: "visible" });
			} else if (windowWidth < replaceWidth) {
				$this.attr("src", $this.attr("src").replace(pcName, spName)).css({ visibility: "visible" });
			}
		}
		jQuery(window).resize(function () {
			imgSize();
		});
		imgSize();
	});
});