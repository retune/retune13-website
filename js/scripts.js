WebFontConfig = { fontdeck: { id: '25696' } };

		(function() {
		  var wf = document.createElement('script');
		  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		  wf.type = 'text/javascript';
		  wf.async = 'true';
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(wf, s);
		})();



// var topRange      = 200,  // measure from the top of the viewport to X pixels down
	//     edgeMargin    = 20,   // margin above the top or margin from the end of the page
	//     contentTop = [];

$(document).ready(function() {
//		$(".speaker_1 a.showImage").click(function(){
// 			console.log($("#speaker_1 .speaker_images").css('left')- 100);
//  		$(".speaker_1 .speaker_images").animate({left: '-=287px'});
//   	});

	$("#intro").backstretch([
      "http://retune.de/2013/img/Auger_Blinddate.jpg"
    , "http://retune.de/2013/img/Bailey_01.jpg"
    , "http://retune.de/2013/img/KyleMcDonald_ExR3.jpg"
    , "http://retune.de/2013/img/Auger_FRC3.jpg"
    , "http://retune.de/2013/img/JulianOliver_Transparency-Grenade.jpg"
    , "http://retune.de/2013/img/Bailey_02.jpg"
    , "http://retune.de/2013/img/KyleMcDonald_LightLeaks.jpg"
    , "http://retune.de/2013/img/Deschamps-Sonsino_GoodNightLamp.jpg"
    , "http://retune.de/2013/img/JulianOliver_four-interrupted-carparks.jpg"
    
  ], {duration: 3000, fade: 750});


	var texts = [
	  "James Auger - Smell+"
    , "Jeremy Bailey - Explore the Future of Creativity"
    , "Kyle McDonald - ExR3"
    , "James Auger - Carnivorous Domestic Entertainment Robots"
    , "Julian Oliver - The Transparency Grenade"
    , "Jeremy Bailey - Slaves"
    , "Kyle McDonald - LightLeaks"
    , "Alexandra Deschamps-Sonsino - Good Night Lamp"
    , "Julian Oliver - Four Interrupted Carparks"
	];
	
	$(window).on("backstretch.show", function (e, instance) {
  		$(".overlay").text( texts[instance.index] );
	});


	$("nav.imgNav a.left").click(function(){
		$(this).parent().siblings(".speaker_images").animate({left: '-=287px'});
	});

	$("nav.imgNav a.right").click(function(){
		$(this).parent().siblings(".speaker_images").animate({left: '+=287px'});
	});

	// resizing
	$("#intro").height($(window).height()-120-60); // 120 ist das menü und 60 = 10 padding top und 50 padding bottom
	$(".venue iframe").height($(window).height()-120);
	$(".venue iframe").width($(window).width());
	$(".partners").css('min-height', $(window).height()-120-60);
	$(".press").css('min-height', $(window).height()-120-60);

	// smooth scrolling for internal links from here: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// MENU ANIMATION
	// Cache selectors
	var lastId,
	    topMenu = $("nav#main"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   // Get id of current scroll item

	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });

	   // Get the id of the current element
	   cur = cur[cur.length-1];

	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;

	       // Set/remove active class
	       menuItems
	         .removeClass("active")
	         .filter("[href=#"+id+"]").addClass("active");
	   }                   
	});

});

$(window).resize(function() {
	// 130 weil der Kopf oben 120 hoch ist + 10px padding
	$("#intro").height($(window).height()-120-60); // 120 ist das menü, 60 = 10 padding top und 50 padding bottom
	$(".partners").css('min-height', $(window).height()-120-60);
	$(".press").css('min-height', $(window).height()-120-60);
	$(".venue iframe").height($(window).height()-120);
	$(".venue iframe").width($(window).width());
});