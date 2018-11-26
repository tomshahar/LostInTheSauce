$("#cookies-link").click(function() {
  $(".recipes-container").slideUp(350, function() {
    $("#recipe-1").slideDown(350);
  });
})
