
var assert = require("chai").assert;
var profile = require("./profile.json");

describe("profile", () => {
  it("has id", () => {
    assert.match(profile.id, /^\d{6}$/);
  })
})
