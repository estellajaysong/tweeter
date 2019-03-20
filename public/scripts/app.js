/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//when document is loaded...
$(document).ready(function(){ 

//creates the HTML element for a new Tweet
function createTweetElement(data) {
  let $tweet = $("<article>").addClass("tweet");
  $tweet.append($("<header>")
  .append($("<img>").addClass("icon").attr("src", data.user.avatars.regular))
  .append($("<span>").addClass("handle").text(data.user.handle))
  .append($("<div>").addClass("displayName").text(data.user.name))
  )
  $tweet.append($("<div>").addClass("content").text(data.content.text)
  )
  $tweet.append($("<footer>").text(data.created_at))
  return $tweet;
}

//loops through Tweets, creates the HTML element, and appends it to the Tweet container
function renderTweets(tweets) {
  tweets.forEach((tweet) => {
    $(".tweet-container").append(createTweetElement(tweet));
  });
}
// AJAX GET req to server for tweets and then render the Tweets
function loadTweets() {
  $.ajax("/tweets")
    .done((response) => {
      renderTweets(response)
    })
};
loadTweets();

// post-tweet POST req to server
  $("#post-tweet").submit(function (event) {
    event.preventDefault();
    if ($("textarea").val().length > 140) {
      alert("Oops! Your Tweet has exceeded the 140-character limit");
    } else if ($("textarea").val() === "") {
      alert("Oops! You cannot submit an empty Tweet");
    } else {
      let data = ($(this).serialize());
      $.post("/tweets", data, (response) => {
          loadTweets();
      })
    };
  });




})
