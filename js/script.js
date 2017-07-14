$(document).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function(){
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 185) {
      $('.logo-dw').css('opacity', 1);
      $('.logo-dw').css('top', 5);
      $('.navbar-default').css('padding-top', 5);
      $('.navbar-default').css('padding-bottom', 5);
    }else{
      $('.logo-dw').css('opacity',0);
      $('.logo-dw').css('top', 0);
      $('.navbar-default').css('padding-top', 0);
      $('.navbar-default').css('padding-bottom', 0);
    }
  });

  $('#bs-example-navbar-collapse-1 li a').click(function(){
    $('#bs-example-navbar-collapse-1').removeClass('in');
  });

});
  