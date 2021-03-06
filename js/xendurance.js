/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

$( document ).ready(function() {
// Instafeed 
var feed = new Instafeed({ get: 'tagged', 
                           tagName: 'xenduranceboxchallenge',
                           accessToken: '4828639245.ba4c844.56b37e2ab2314b31aa66016543ec23ce',
                           sortBy: 'most-recent', 
                           limit: '16',
                           template: '<a class="instagramImage" href="{{link}}"><img src="{{image}}" /></a>' }); 


feed.run();
});  

$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('hide.bs.modal', function (e) {
   var player = $(e.target).find('iframe'),
        vidSrc = player.prop('src');
    player.prop('src', ''); // to force it to pause
    player.prop('src', vidSrc);
})

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});