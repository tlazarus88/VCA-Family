// Document Ready

jQuery(document).ready(function($) {



// Window CSS Resize Fix

$(window).on('resize load', function(){
  // Full Page
  // vpw = $(window).width();
  // vph = $(window).height();
  
  // $('.full-page').height(vph);
  
  //location.reload();
});

// Full Page

vpw = $(window).width();
vph = $(window).height();

$('.full-page').height(vph);
$('.main-full-page').height(vph - 112);

if ($(window).width() > 992) {
    $('.main-full-page').height(vph - 112);
} else {
    $('.main-full-page').height(vph);
}

// Height of Legal Header

var $legalHeader = $('#legal-header');
var legalHeaderHeight = $legalHeader.outerHeight(true);

// Nav Stickiness Swap

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  $("#sticky-nav").hide();

  var $orgToC = $('#toc');
  var bottomToC = $orgToC.offset().top + $orgToC.outerHeight(true) - legalHeaderHeight;

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

// Mobile Next/Previous Section

$(function(){
    
    var pagePositon = 0,
        sectionsSelector = 'section',
        $scrollItems = $(sectionsSelector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;
    
    //Map the sections:
    $scrollItems.each(function(index,ele) {
      $(ele).attr("debog",index).data("pos",index);
    });

    // Bind to scroll
    $(window).bind('scroll',upPos);
    
    //Move on click:
    $('#next-prev a').on('click touchstart', function(e) {
        if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top - 45
            }, 300);
        }
        if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
            pagePositon--;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top - 45
              }, 300);
            return false;
        }
    });
    
    //Update position func:
    function upPos(){
       var fromTop = $(this).scrollTop();
       var $cur = null;
        $scrollItems.each(function(index,ele){
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
       if ($cur != null && pagePositon != $cur.data('pos')) {
           pagePositon = $cur.data('pos');
       }                   
    }
    
});

// Legal Header Pop-up

$(function(){
  $('.info').click(function(){
    $('#sponsored-by').fadeToggle("slow", "linear");
    $('.info').toggleClass('info-opaque');
  })
})

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

// Fancy Box
$(document).ready(function() {
    $(".fancybox").fancybox();
  });

// Progress Bar Representation

scrollIntervalID = setInterval(progressBar, 10);

function progressBar() {

  var topNCA = $('#nca-hero').offset().top - legalHeaderHeight;
  var topNBlog = $('#nrthrn-blog-post').offset().top - legalHeaderHeight;
  var topCampCa = $('#camp-ca').offset().top - legalHeaderHeight;
  var topPhotoOp = $('#photo-op').offset().top - legalHeaderHeight;
  var topRoadtrip = $('#article-roadtrip').offset().top - legalHeaderHeight;
  var topKidAttractions = $('#kid-attractions').offset().top - legalHeaderHeight;
  var topCCA = $('#cca-hero').offset().top - legalHeaderHeight;
  var topCBlog = $('#cntrl-blog-post').offset().top - legalHeaderHeight;
  var topEdu = $('#eduvacation').offset().top - legalHeaderHeight;
  var topMeetCCA = $('#article-meet-cca').offset().top - legalHeaderHeight;
  var topParks = $('#must-see-parks').offset().top - legalHeaderHeight;
  var topEats = $('#article-eats').offset().top - legalHeaderHeight;
  var topSCA = $('#sca-hero').offset().top - legalHeaderHeight;
  var topSBlog = $('#sthrn-blog-post').offset().top - legalHeaderHeight;
  var topThemeParks = $('#theme-parks').offset().top - legalHeaderHeight;
  var topSurfSkate = $('#article-surf-skate').offset().top - legalHeaderHeight;
  var topKidBeaches = $('#kid-beaches').offset().top - legalHeaderHeight;
  var topVideoBella = $('#video-bella').offset().top - legalHeaderHeight;

  if ($(window).scrollTop() >= (topNCA)) {
    $('.nav-status-bar').addClass('status-width-0');
    $('.btn.nav-nca').css('color','rgba(255,255,255,1)');
  } else {
    $('.nav-status-bar').removeClass('status-width-0');
  };
  if ($(window).scrollTop() >= (topNBlog)) {
    $('.nav-status-bar').addClass('status-width-1');
    $('.mobile-nav-buttons').css('visibility','visible');
  } else {
    $('.nav-status-bar').removeClass('status-width-1');
      $('.mobile-nav-buttons').css('visibility','hidden');
  };
  if ($(window).scrollTop() >= (topCampCa)) {
    $('.nav-status-bar').addClass('status-width-2');
  } else {
    $('.nav-status-bar').removeClass('status-width-2');
  };
  if ($(window).scrollTop() >= (topPhotoOp)) {
    $('.nav-status-bar').addClass('status-width-3');
  } else {
    $('.nav-status-bar').removeClass('status-width-3');
  };
  if ($(window).scrollTop() >= (topRoadtrip)) {
    $('.nav-status-bar').addClass('status-width-4');
  } else {
    $('.nav-status-bar').removeClass('status-width-4');
  };
  if ($(window).scrollTop() >= (topKidAttractions)) {
    $('.nav-status-bar').addClass('status-width-5');
    $('.btn.nav-cca').css('color','rgba(0,0,0,1)')
  } else {
    $('.nav-status-bar').removeClass('status-width-5');
  };
  if ($(window).scrollTop() >= (topCCA)) {
    $('.btn.nav-cca').css('color','rgba(255,255,255,1)');
    $('.btn.nav-nca').css('color','rgba(0,0,0,1)');
  };
  if ($(window).scrollTop() >= (topCBlog)) {
    $('.nav-status-bar').addClass('status-width-6');
  } else {
    $('.nav-status-bar').removeClass('status-width-6');
  };
  if ($(window).scrollTop() >= (topEdu)) {
    $('.nav-status-bar').addClass('status-width-7');
  } else {
    $('.nav-status-bar').removeClass('status-width-7');
  };
  if ($(window).scrollTop() >= (topMeetCCA)) {
    $('.nav-status-bar').addClass('status-width-8');
  } else {
    $('.nav-status-bar').removeClass('status-width-8');
  };
  if ($(window).scrollTop() >= (topParks)) {
    $('.nav-status-bar').addClass('status-width-9');
  } else {
    $('.nav-status-bar').removeClass('status-width-9');
  };
  if ($(window).scrollTop() >= (topEats)) {
    $('.nav-status-bar').addClass('status-width-10');
    $('.btn.nav-sca').css('color','rgba(0,0,0,1)')
  } else {
    $('.nav-status-bar').removeClass('status-width-10');
  };
  if ($(window).scrollTop() >= (topSCA)) {
    $('.btn.nav-sca').css('color','rgba(255,255,255,1)');
    $('.btn.nav-cca').css('color','rgba(0,0,0,1)');
  };
  if ($(window).scrollTop() >= (topSBlog)) {
    $('.nav-status-bar').addClass('status-width-11');
  } else {
    $('.nav-status-bar').removeClass('status-width-11');
  };
  if ($(window).scrollTop() >= (topThemeParks)) {
    $('.nav-status-bar').addClass('status-width-12');
  } else {
    $('.nav-status-bar').removeClass('status-width-12');
  };
  if ($(window).scrollTop() >= (topSurfSkate)) {
    $('.nav-status-bar').addClass('status-width-13');
  } else {
    $('.nav-status-bar').removeClass('status-width-13');
  };
  if ($(window).scrollTop() >= (topKidBeaches)) {
    $('.nav-status-bar').addClass('status-width-14');
  } else {
    $('.nav-status-bar').removeClass('status-width-14');
  };
  if ($(window).scrollTop() >= (topVideoBella)) {
    $('.nav-status-bar').addClass('status-width-15');
  } else {
    $('.nav-status-bar').removeClass('status-width-15');
  };
  
};

// Roadtrip Stickiness

scrollIntervalID = setInterval(roadCirc, 1)

function roadCirc() {
  $('#roadtrip-circle-2').css('visibility', 'hidden');

  var $roadList = $('#list-roadtrip');
  var topRoadList = $roadList.offset().top - legalHeaderHeight;

  var $endRoadList = $('#last-roadtrip');
  var bottomRoadList = $endRoadList.offset().top + $endRoadList.outerHeight(true) - legalHeaderHeight;

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

// Roadtrip Map

scrollIntervalID = setInterval(circleBg, 10)

function circleBg() {

  var $roadtrip1 = $('#list-roadtrip');
  var roadtrip1 = $roadtrip1.offset().top - legalHeaderHeight;
  var $roadtrip1a = $('#roadtrip-1a');
  var roadtrip1a = $roadtrip1a.offset().top - legalHeaderHeight;
  var roadtrip1b = $roadtrip1a.offset().top - legalHeaderHeight + ($roadtrip1a.outerHeight(true)*.5);
  var $roadtrip2 = $('#roadtrip-2');
  var roadtrip2 = $roadtrip2.offset().top - legalHeaderHeight;
  var $roadtrip3 = $('#roadtrip-3');
  var roadtrip3 = $roadtrip3.offset().top - legalHeaderHeight;
  var $roadtrip4 = $('#roadtrip-4');
  var roadtrip4 = $roadtrip4.offset().top - legalHeaderHeight;
  var $roadtrip5 = $('#last-roadtrip');
  var roadtrip5 = $roadtrip5.offset().top - legalHeaderHeight;

  if ($(window).scrollTop() >= (roadtrip1a)) {
    $('.roadtrip-circle').removeClass('circle-bg-1');
  } else {
    $('.roadtrip-circle').addClass('circle-bg-1');
  };
  if ($(window).scrollTop() >= (roadtrip1b)) {
    $('.roadtrip-circle').removeClass('circle-bg-1a');
  } else {
    $('.roadtrip-circle').addClass('circle-bg-1a');
  };
  if ($(window).scrollTop() >= (roadtrip1)) {
    $('.roadtrip-circle').removeClass('circle-bg-1b');
  } else {
    $('.roadtrip-circle').addClass('circle-bg-1b');
  };
  if ($(window).scrollTop() >= (roadtrip2)) {
    $('.roadtrip-circle').removeClass('circle-bg-2')
  } else {
    $('.roadtrip-circle').addClass('circle-bg-2');
  };
  if ($(window).scrollTop() >= (roadtrip3)) {
    $('.roadtrip-circle').removeClass('circle-bg-3')
  } else {
    $('.roadtrip-circle').addClass('circle-bg-3');
  };
  if ($(window).scrollTop() >= (roadtrip4)) {
    $('.roadtrip-circle').removeClass('circle-bg-4')
  } else {
    $('.roadtrip-circle').addClass('circle-bg-4');
  };
  if ($(window).scrollTop() >= (roadtrip5)) {
    $('.roadtrip-circle').removeClass('circle-bg-5')
  } else {
    $('.roadtrip-circle').addClass('circle-bg-5');
  };

};

// Smooth Scrolling
// includes offset for #sticky-nav
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - (45 + legalHeaderHeight)
        }, 1000);
        return false;
      }
    }
  });
});


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
    $(this).html(close_text).next('div[data-readmore]').show(500).after(this);
  } else {
    $(this).html(open_text).prev('div[data-readmore]').hide(500).before(this);
  }
  
});

// Pre-loader

$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})

});

