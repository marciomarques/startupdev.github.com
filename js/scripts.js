var slider = {
  init: function(e) {
    slider.scrollToNav();
    slider.hideAll();
    $(".step:first").addClass("current");
    $("article:first").slideDown();
  },
  hideAll: function() {
    $("#quick-signup").hide();
    $(".step").removeClass("current");
    $("article").slideUp();
  },
  moveLeft: function() {

  },
  moveRight: function() {

  },
  moveToElement: function(element) {
    slider.scrollToNav();
    slider.hideAll();
    element.addClass("current");
    $("#content-" + element.attr("id")).slideDown("slow");
  },
  scrollToNav: function() {
    $.scrollTo( $("header p"), 800 );
  }
}

$(function() {
  $(".step a").tipsy({gravity: 's'});

  $(".highlight").click(function() {
    $.scrollTo( $(this).attr("href"), 800 );
  });

  $("#see-more").click(function(e) {
    e.preventDefault();
    slider.init();
  });

  $(".step a").each(function(i) {
    $(this).click(function(e) {
      e.preventDefault();
      console.log($(".step").eq(i));
      slider.moveToElement($(".step").eq(i));
    });
  });
});