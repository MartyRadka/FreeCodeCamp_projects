$(document).ready(function() {

  /* Sticky navigation */
  $(".js--section-info").waypoint(function(direction) {
      if (direction == "down") {
          $(".header-nav").addClass("header-nav-sticky");
      } else {
          $(".header-nav").removeClass("header-nav-sticky");
      }
  }, {
      offset: "60px;"
  });

  /* Scroll main nav */
  $(function() {
    $('.header-nav a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
