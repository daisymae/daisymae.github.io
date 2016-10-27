// this had #nav, but we don't have a div with id of nav, so we are going to use the navbar-collapse class instead
$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
    // offset by -50 so scrolls more to the top of the 'region'
       scrollTop: $(hash).offset().top -50
     }, 300, function(){ // number here is the speed; higher # is slower

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// make it scroll for the 'Home' link also
$("a.navbar-brand[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
    // offset by 50 so scrolls more to the top of the 'region'
       scrollTop: $(hash).offset().top -50
     }, 300, function(){ // number here is the speed; higher # is slower

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// make it scroll for the back-to-top button link also
$("#back-to-top a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
    // offset by 50 so scrolls more to the top of the 'region'
       scrollTop: $(hash).offset().top -50
     }, 300, function(){ // number here is the speed; higher # is slower

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});