DeployConfig.get('googleSecret', function(secret) {
  Meteor.accounts.google.setSecret(secret);
});

DeployConfig.get('twitterSecret', function(secret) {
  Meteor.accounts.twitter.setSecret(secret);
});
