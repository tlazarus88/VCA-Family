// Window CSS Resize Fix

jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    	location.reload();
    	return;
    	}
	});
});

// Nav Stickiness Swap

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  $("#sticky-nav").hide();

  var $orgToC = $('#toc');   
  var bottomToC = $orgToC.offset().top + $orgToC.outerHeight(true);           

  if ($(window).scrollTop() >= (bottomToC)) {
    // scrolled past the original position; now only show the cloned, sticky element.
    $('#sticky-nav').show();
    $('#toc').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('#sticky-nav').hide();
    $('#toc').css('visibility','visible');
  }
};

// Roadtrip Stickiness

scrollIntervalID = setInterval(roadCirc, 10)

function roadCirc() {

  var $roadList = $('#list-roadtrip');   
  var bottomRoadList = $roadList.offset().top;           

  if ($(window).scrollTop() >= (bottomRoadList)) {
  	$('#roadtrip-circle').css('position', 'fixed');
  } else {
  	$('#roadtrip-circle').css('position', 'absolute');
  }
};