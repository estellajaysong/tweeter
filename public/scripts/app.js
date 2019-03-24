//when document is loaded...
$(document).ready(function () {
  //creates the HTML element for a new Tweet
  function createTweetElement(data) {
    let date = new Date(data.created_at);
    date = date.toISOString();
    let relDate = moment(date).fromNow();
    console.log(relDate)
    let $tweet = $("<article>").addClass("tweet");
    $tweet.append($("<header>")
      .append($("<img>").addClass("icon").attr("src", data.user.avatars.regular))
      .append($("<span>").addClass("handle").text(data.user.handle))
      .append($("<div>").addClass("displayName").text(data.user.name))
    );
    $tweet.append($("<div>").addClass("content").text(data.content.text)
    );
    $tweet.append($("<footer>").text(relDate)
      .append($("<img>").addClass("tweet-actions").attr("src", "./images/tweet-actions.jpeg"))
    );
    return $tweet;
  };

  //loops through Tweets, creates the HTML element, and appends it to the Tweet container
  function renderTweets(tweets) {
    tweets.forEach((tweet) => {
      $(".tweet-container").prepend(createTweetElement(tweet));
    });
  };

  // AJAX GET req to server for tweets and then render the Tweets
  function loadTweets() {
    $.ajax("/tweets")
      .done((response) => {
        renderTweets(response);
      });
  };
  loadTweets();

  // post-tweet POST req to server and shows the Tweet without refreshing the page
  $("#post-tweet").submit(function (event) {
    event.preventDefault();
    $("#error-message").fadeOut("fast");
    if ($("textarea").val().length > 140) {
      $("#error-message").html("Your Tweet has exceeded the 140-character limit");
      $("#error-message").fadeIn("fast");
    } else if ($("textarea").val() === "") {
      $("#error-message").html("Please fill out this field");
      $("#error-message").fadeIn("fast");
    } else {
      let data = ($(this).serialize());
      $.post("/tweets", data, (response) => {
        $.ajax("/tweets")
          .done((response) => {
            $(".tweet-container").prepend(createTweetElement(response[response.length - 1]));
            $("textarea").val("");
            $("#counter").html("140");
          });
      });
    };
  });

  // Compose button click event to hide and unhide new-tweet section with sliding action
  $("#compose-button").click(function () {
    $(".new-tweet").slideToggle("fast");
    $("textarea").focus();
  });
});
