var SnaptkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets(){
	SnaptkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
	initializeStreamOfTweets: initializeStreamOfTweets
};