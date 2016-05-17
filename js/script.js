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

// Image Animations 

$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()
});

// Progress Bar Representation

// var progNCA = $('#nca-hero').waypoint(function(direction) {
//   $(".nav-status-bar").animate({'width': '0%'});
// })

// var progNBlog = $('#nrthrn-blog-post').waypoint(function(direction) {
//   $(".nav-status-bar").animate({'width': '6.66%'});
// })

// var progCampCa = $('#camp-ca').waypoint(function(direction) {
//   $(".nav-status-bar").animate({'width': '13.33%'});
// })

// scrollIntervalID = setInterval(progressBar, 10);

// function progressBar() {

//   var topNCA = $('#nca-hero').offset().top;
//   var topNBlog = $('#nrthrn-blog-post').offset().top;
//   var topCampCa = $('#camp-ca').offset().top;


//   if ($(window).scrollTop() >= (topNCA)) {
//     $(".nav-status-bar").css({'width': '0%', 'transition': 'all 10s ease'});
//   };
//   if ($(window).scrollTop() >= (topNBlog)) {
//     $(".nav-status-bar").css({'width': '6.66%', 'transition': 'all 10s ease'});
//   }; 
//   if ($(window).scrollTop() >= (topCampCa)) {
//     $(".nav-status-bar").css({'width': '13.33%', 'transition': 'all 10s ease'});
//   };
// };

// scrollIntervalID = setInterval(progressBar, 10);

// function progressBar() {

//   var topNCA = $('#nca-hero').offset().top;
//   var topNBlog = $('#nrthrn-blog-post').offset().top;
//   var topCampCa = $('#camp-ca').offset().top;


//   if ($(window).scrollTop() >= (topNCA)) {
//     $(".nav-status-bar").animate({'width': '0%'});
//   };
//   if ($(window).scrollTop() >= (topNBlog)) {
//     $(".nav-status-bar").animate({'width': '6.66%'});
//   }; 
//   if ($(window).scrollTop() >= (topCampCa)) {
//     $(".nav-status-bar").animate({'width': '13.33%'});
//   };
// };

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
    $('#last-circle').addClass('circle-bg-7');
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

// var surfBg = ['url(../images/surf-skate/surf_1.jpg', 'url(../images/surf-skate/surf_2.jpg', 'url(../images/surf-skate/surf_3.jpg'];

// $.each(surfBg, function(i, surfBg){
//     setTimeout(function(){$('.parallax-bg__surf').css('background-image', surfBg)}, (i+1)*1000);
// });
// var now = 0;
// var int = self.setInterval(changeBG(), 1000);
// var array = ["1", "2", "3"];

// function changeBG() {
//   //array of backgrounds
//   now = (now+1) % array.length ;
//   $('.parallax-bg__surf').css('background-image', 'url(../images/surf-skate/surf_' + array[now] + '.jpg)');
// };




// Roadtrip Map

scrollIntervalID = setInterval(circleBg, 10)

function circleBg() {

  var $roadtrip1 = $('#list-roadtrip');
  var roadtrip1 = $roadtrip1.offset().top;
  var $roadtrip2 = $('#roadtrip-2');
  var roadtrip2 = $roadtrip2.offset().top;
  var $roadtrip3 = $('#roadtrip-3');
  var roadtrip3 = $roadtrip3.offset().top;
  var $roadtrip4 = $('#roadtrip-4');
  var roadtrip4 = $roadtrip4.offset().top;
  var $roadtrip5 = $('#last-roadtrip');
  var roadtrip5 = $roadtrip5.offset().top;


  if ($(window).scrollTop() >= (roadtrip1)) {
    $('.roadtrip-circle').addClass('circle-bg-2');
  } else {
    $('.roadtrip-circle').removeClass('circle-bg-2');
  };
  if ($(window).scrollTop() >= (roadtrip2)) {
    $('.roadtrip-circle').addClass('circle-bg-3');
  } else {
    $('.roadtrip-circle').removeClass('circle-bg-3');
  };
  if ($(window).scrollTop() >= (roadtrip3)) {
    $('.roadtrip-circle').addClass('circle-bg-4');
  } else {
    $('.roadtrip-circle').removeClass('circle-bg-4');
  };
  if ($(window).scrollTop() >= (roadtrip4)) {
    $('.roadtrip-circle').addClass('circle-bg-5');
  } else {
    $('.roadtrip-circle').removeClass('circle-bg-5');
  };
  if ($(window).scrollTop() >= (roadtrip5)) {
    $('.roadtrip-circle').addClass('circle-bg-6');
  } else {
    $('.roadtrip-circle').removeClass('circle-bg-6');
  };

  // function addBlue() = function(callback) {
  //   $('.roadtrip-circle').addClass('circle-blue', function() {
  //   callback();
  //   });
  // };

  // function addRed() = function(){
  //   $('.roadtrip-circle').addClass('circle-red');
  // };


};

// Accordion

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

// READ MORE

$('div[data-readmore]').hide().each(function() {
  var open_text = $(this).data('open-text');
  open_text = typeof open_text !== 'undefined' ? open_text : 'Read More';
  $(this).before('<a class="read-more" data-readmore-toggle href="#">' + open_text + '</a>');
});

$('[data-readmore-toggle]').click(function(e) {
  e.preventDefault();
  
  var open_text = $(this).siblings('div[data-readmore]').data('open-text');
  var close_text = $(this).siblings('div[data-readmore]').data('close-text');
  
  if(typeof open_text == 'undefined') {open_text = "Read More"}
  if(typeof close_text == 'undefined') {close_text = ""}
  
  if($(this).text() == open_text) {
    $(this).html(close_text).next('div[data-readmore]').show(300).after(this);
  } else {
    $(this).html(open_text).prev('div[data-readmore]').hide(300).before(this);
  }
  
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

