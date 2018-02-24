// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-blockstack.js.
import { name as packageName } from "meteor/amazebot:accounts-blockstack";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-blockstack - example', function (test) {
  test.equal(packageName, "accounts-blockstack");
});
