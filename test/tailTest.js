const tail = require('../tail');
const assert = require('chai').assert;

describe("#head", () => {

  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns [] for ["Labs"]`, () => {
    assert.deepEqual(tail(["Labs"]), []);
  });

  it(`returns [] for []`, () => {
    assert.deepEqual(tail([]), []);
  });

});