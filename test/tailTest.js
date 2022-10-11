const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test Case 2
const words2 = ["Labs"];
tail(words2);
assertEqual(words2.length, 1);

// Test Case 3
const words3 = [];
tail(words3);
assertEqual(words3.length, 0);