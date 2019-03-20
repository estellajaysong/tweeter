$(document).ready(function () {
  $("#textarea").on("input", function (event) {
    var counter = $(this).parent().find(".counter");
    counter.html(140 - ($(this).val().length));
    if (counter.html() < 0) {
      counter.css("color", "red");
    } else if (counter.html() >= 0) {
      counter.css("color", "");
    }
  })
});