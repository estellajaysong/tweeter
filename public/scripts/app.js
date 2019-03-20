/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function(){ 



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


// let $newTweet = createTweetElement(data[0]);
// console.log($newTweet);
// $('.tweet-container').append($newTweet);

function renderTweets(tweets) {
  console.log($(".tweet-container"));

  tweets.forEach((tweet) => {
    $(".tweet-container").append(createTweetElement(tweet));
    console.log("in da loop");
  });
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}
renderTweets(data)
});