$(document).ready(function () {
  $("#textarea").on("input", function (event) {
    var counter = $(this).parent().find(".counter");
    counter["0"].innerHTML = 140 - ($(this).val().length);
    if (counter["0"].innerHTML < 0) {
      counter.css("color", "red");
    } else if (counter["0"].innerHTML >= 0) {
      counter.css("color", "");
    }
  })
});