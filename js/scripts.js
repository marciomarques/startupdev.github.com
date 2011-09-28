var slider = {
  init: function() {
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
  moveToElement: function(element) {
    slider.scrollToNav();
    slider.hideAll();
    element.addClass("current");
    $("#content-" + element.attr("id")).slideDown("slow");
  },
  scrollToNav: function() {
    $.scrollTo( $("header p"), 800 );
  },
  destroy: function() {
    slider.hideAll();
    $("#quick-signup").show();
  }
}

$(function() {
  $("a[rel^='external']").each(function() {
    $(this).attr("target","_blank");
  });

  $(".step a").tipsy({gravity: 's'});

  $(".highlight").click(function() {
    $.scrollTo( $(this).attr("href"), 800 );
  });

  $("#see-more").click(function(e) {
    e.preventDefault();
    slider.init();
  });

  $("#logo a").click(function(e) {
    e.preventDefault();
    slider.destroy();
  });

  $(".step a").each(function(i) {
    $(this).click(function(e) {
      e.preventDefault();
      slider.moveToElement($(".step").eq(i));
    });
  });

  $("a.move-left").click(function(e) {
    e.preventDefault();
    var $prev = $(this).closest("article").prev().attr("id");
    $prev = $prev.replace("content-","");
    slider.moveToElement($("#" + $prev));
  });

  $("a.move-right").click(function(e) {
    e.preventDefault();
    var $next = $(this).closest("article").next().attr("id");
    $next = $next.replace("content-","");
    slider.moveToElement($("#" + $next));
  });

  $("ul#projects li").mouseover(function() {
    $(this).addClass("hover");
  }).mouseout(function() {
    $(this).removeClass("hover");
  }).click(function() {
    var $link = $(this).children("p").children("a").attr("href");
    if ($link) {
      window.open($link);
      return false;
    }
  });;
});