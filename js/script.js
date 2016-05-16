// Document Ready

jQuery(document).ready(function($) {

// Full Page

vpw = $(window).width();
vph = $(window).height();

$('.full-page').height(vph);

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
  $('#roadtrip-circle-2').css('visibility', 'hidden');

  var $roadList = $('#list-roadtrip');
  var topRoadList = $roadList.offset().top;

  var $endRoadList = $('#last-roadtrip');
  var bottomRoadList = $endRoadList.offset().top + $endRoadList.outerHeight(true);

  if ($(window).scrollTop() >= (topRoadList)) {
  	$('#roadtrip-circle-1').css('position', 'fixed');
  } else {
  	$('#roadtrip-circle-1').css('position', 'absolute');
  };

  if ($(window).scrollTop() >= (bottomRoadList)) {
  	$('#roadtrip-circle-1').css('position', 'absolute');
  	$('#roadtrip-circle-2').css('visibility', 'visible');
  };

};

// Surf n Skate Scroll Function
scrollIntervalID = setInterval(surfScroll, 10)

function surfScroll() {

  var $surfList = $('#surf-list');
  var topSurfList = $surfList.offset().top;

  var bottomSurfList = $surfList.offset().top + $surfList.outerHeight(true);

  if ($(window).scrollTop() >= (topSurfList)) {
    $('#surf-list').css('overflow-y', 'scroll');
  } else {
    $('#surf-list').css('overflow-y', 'hidden');
  };

};

scrollIntervalID = setInterval(skateScroll, 10)

function skateScroll() {

  var $skateList = $('#skate-list');
  var topSkateList = $skateList.offset().top;

  var bottomSkateList = $skateList.offset().top + $skateList.outerHeight(true);

  if ($(window).scrollTop() >= (topSkateList)) {
    $('#skate-list').css('overflow-y', 'scroll');
  } else {
    $('#skate-list').css('overflow-y', 'hidden');
  };

};

// Surf n Skate Background Loop

var surfBg = ['url(../images/surf-skate/surf_1.jpg', 'url(../images/surf-skate/surf_2.jpg', 'url(../images/surf-skate/surf_3.jpg'];

$.each(surfBg, function(i, surfBg){
    setTimeout(function(){$('.parallax-bg__surf').css('background-image', surfBg)}, (i+1)*1000);
});
// var now = 0;
// var int = self.setInterval(changeBG(), 1000);
// var array = ["1", "2", "3"];

// function changeBG() {
//   //array of backgrounds
//   now = (now+1) % array.length ;
//   $('.parallax-bg__surf').css('background-image', 'url(../images/surf-skate/surf_' + array[now] + '.jpg)');
// };




// Roadtrip Map

// mapboxgl.accessToken = 'pk.eyJ1IjoidGxhemFydXM4OCIsImEiOiJjaW81dDdyNnkwMjBndmlsemlsa3EzNnBrIn0.3NylPNCT2ZSfG4mLTwXyKw';
//   var map = new mapboxgl.Map({
//       container: 'roadtrip-circle-1',
//       style: 'mapbox://styles/mapbox/streets-v8',
//       center: [40, -123]
//       interactive: false,
      
//   });

// var map;

// function init_map(){
// 	var myOptions = {
// 		zoom:15,
// 		center:new google.maps.LatLng(40.6813578,-73.97733169999998),
// 		mapTypeId: google.maps.MapTypeId.SATELLITE,
// 		scrollwheel: false
// 	};
// 	map = new google.maps.Map(document.getElementById("roadtrip-circle-1"), myOptions);
// 	marker = new google.maps.Marker({
// 		map: map,
// 		position: new google.maps.LatLng(40.6813578,-73.97733169999998)
// 	});

  // Alter Roadtrip Image

//   scrollIntervalID = setInterval(mapZoom, 10)

//   function mapZoom(){
//     if ($(window).scrollTop() >= ($('#roadtrip-2').offset().top + $('#roadtrip-2').outerHeight(true))) {
//       myOptions = {zoom: 20}
//     }
//   };
// };

// google.maps.event.addDomListener(window, 'load', init_map);
// google.maps.event.addDomListener(window, "resize", function() {
//  	var center = map.getCenter();
//  	google.maps.event.trigger(map, "resize");
//  	map.setCenter(center);
//  });

// Accordion

// $('.hideContentHeader').prepend('<span class="indicator">+</span> ');
$('.hideContentHeader').prepend('<span class="indicator"><img src="images/plus-x-icon-wh.png"></span> ');

$('.hideContentHeader').click(function() {
    $(this).parent().find('.hideContent').slideToggle("slow");
});

$('.hideContentHeader').click(function() {
    $(this).toggleClass("active");
});

$('.hideContentHeader').click(function() {
    $(this).find('.indicator').toggleClass("rotate");
});

// Smooth Scrolling
// includes offset for #sticky-nav

$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-44
        }, 1000);
        return false;
      }
    }
  });
});

});

