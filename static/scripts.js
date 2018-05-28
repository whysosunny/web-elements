$(document).ready(function () {

  $(window).scroll(function (e) {
    var scrollPosition = window.pageYOffset;
    var fixedBreakPoint = 360;
    var navContainer = $('.nav-container');

    if (scrollPosition > fixedBreakPoint) {
      if (!navContainer.hasClass('top-fixed')) {
        navContainer.addClass('top-fixed')
      }
    } else {
      if (navContainer.hasClass('top-fixed')) {
        navContainer.removeClass('top-fixed')
      }
    }
  });

});