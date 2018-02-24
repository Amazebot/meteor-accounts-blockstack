Package.describe({
  name: 'amazebot:accounts-blockstack',
  version: '0.0.1',
  summary: 'A login service for serverless sign in with Blockstack Auth',
  git: 'https://github.com/Amazebot/meteor-accounts-blockstack.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('accounts-blockstack.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('amazebot:accounts-blockstack');
  api.mainModule('accounts-blockstack-tests.js');
});
