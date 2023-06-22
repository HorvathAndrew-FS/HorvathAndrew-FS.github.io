$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function () {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".jumbotron-header-logo").addClass("tron-logo-active");
      $(".logo-mobile").addClass("logo-move");
    } else {
      $(".jumbotron-header-logo").removeClass("tron-logo-active");
      $(".logo-mobile").removeClass("logo-move");
    }
  });
});
