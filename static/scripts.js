$(document).ready(function () {

  $('#nav-link-blog').trigger('click');

  //Fixed navbar on scroll
  $(window).scroll(function (e) {
    var scrollPosition = window.pageYOffset;
    var fixedBreakPoint = 360;
    var navContainer = $('.nav-container');

    if (scrollPosition > fixedBreakPoint) {
      if (!navContainer.hasClass('top-fixed')) {
        navContainer.addClass('top-fixed');
        $('.nav-spacer').show();
      }
    } else {
      if (navContainer.hasClass('top-fixed')) {
        navContainer.removeClass('top-fixed')
        $('.nav-spacer').hide();
      }
    }
  });


  //Sidebar
  $('#sidebar-nav-btn').click(function() {
    $('#nav-sidebar').toggleClass('open');
  });


  //Navigator
    $('.nav-item').click(function(elem) {
      var elemId = $(this).attr('id');
      var helperArray = elemId.split('-');
      var pageName = helperArray[helperArray.length - 1];
      var pageElem = $('#' + pageName);

      $('.nav-item').removeClass('active');
      $(this).addClass('active');


      $('.page').hide();

      pageElem.show();

    });


});