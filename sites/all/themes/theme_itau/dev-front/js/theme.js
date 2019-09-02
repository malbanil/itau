jQuery(document).ready(function($)
{


	// -- General -- //
	const $GeneralScope = {

		// Constructor
		init: function() {
			this.menuScripts();
			this.navigationSnippet();
		},

		// Menu scripts
		menuScripts: function() {
			let ButtonTrigger = $('.navbar-header .navbar-toggle');
			let MenuWrapper = $('.navbar-header .navbar-collapse');

			if(ButtonTrigger){
				$(document).on('click','.navbar-toggle', function(){
					ButtonTrigger.toggleClass("collapsed");
				});
			}

			$(window).scroll(function() {

				let scroll    = $(window).scrollTop();
				let header_el = $('.navbar');

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});
		},

		navigationSnippet: function() {
			$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function(event) {
				// On-page links
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
					&& 
					location.hostname == this.hostname
				) {
					// Figure out element to scroll to
					let target = $(this.hash);

					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					// Does a scroll target exist?
					if (target.length) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, function() {
							// Callback after animation
							// Must change focus!
							let $target = $(target);
							$target.focus();

							if($(window).width() <= 768){
								menu_wrapper.slideUp(300);
							}

							if ($target.is(":focus")) { // Checking if the target was focused
								return false;
							} else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							};
						});
					}
				}
			});
		}
	}

	// -- Agegate -- //
	const $AgegateScope = {
		// Constructor
		init: function() {
			this.ageScripts(); 
		},
		// scripts for Agegate
		ageScripts: function() {
			// Dom manipulation
			let ListCountries = $('.form-item-list-of-countries');
			let Checklist     = $('.form-item-remember-me');
			let FbValidate    = $('.age_checker_facebook_validate');
			let RememberMe    = $('.ab-inbev-remember-me');
			let RememberLabel = Checklist.find('label');
			let RememberMeStr = RememberMe.find('strong');
			let FooterContent = $('.ab-inbev-footer');
			
			if(ListCountries) {
			  ListCountries.insertAfter('#age_checker_error_message');
			}
			
			/*
			if(Checklist) {
				Checklist.append(RememberMe);
				RememberLabel.append(RememberMeStr);
			}

			if(FbValidate){
			  FbValidate.insertAfter('#edit-submit');
			  FbValidate.append('<span class="fbTrigger">Sign in with <b>facebook</b></span>')
			}

			if(FooterContent) {
				$('.agegate-container-footer').append(FooterContent);
			}*/
		}
	}

	// -- Home -- //
	const $HomeScope = {

		// Constructor
		init: function() {		

			// Instance functions
			this.homeSliders();
			
		},

		// scripts for slider
		homeSliders: function() {

			
		},
	}

	// ----------------------------
	// TRIGGERS
	// ----------------------------

	// Trigger 
	$GeneralScope.init();

	// Agegate
	if ($('body').hasClass('page-agegate')) {
		$AgegateScope.init();
	}

	// Home Scripts
	if ($('body').hasClass('front')) {
		$HomeScope.init();
	}

});