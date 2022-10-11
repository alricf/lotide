const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE-PASS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([7]), 7);
//TEST CODE-FAIL
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "HELLO");
assertEqual(head([2]), undefined);
assertEqual(head([7]), 8);