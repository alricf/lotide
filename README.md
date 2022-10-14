# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alricf/lotide`

**Require it:**

`const _ = require('@alricf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: The function takes in an array and returns the first element in the array.
* `tail`: The function takes in an array and returns all elements except the first element in the array.
* `middle`: The function takes in an array and returns the middle element of the array.
* `assertArraysEqual`: The function takes in 2 arrays and returns true if they are equal and false if they are not equal.
* `assertEqual`: The function takes in 2 values and returns true if they are equal and false if they are not equal.
* `assertObjectsEqual`: The function takes in 2 objects and returns true if they are equal and false if they are not equal.
* `countLetters`: The function takes in a sentence and returns the count of the letters in the sentence.
* `countOnly`: The function takes in a collection of items and returns the specific subset of those items.
* `eqArrays`: The function takes in 2 arrays and returns true if they are equal and false if they are not equal.
* `eqObjects`: The function takes in 2 objects and returns true if they are equal and false if they are not equal.
* `findKey`: The function takes in an object and a callback and returns the first key that meets the criteria specified by the callback.
* `findKeyByValue`: The function takes in an object and a value and returns the first key that corresponds to that value.
* `flatten`: The function takes in an array that includes nested arrays and returns the flattened version of the array.
* `letterPositions`: The function takes in a string and returns all the indices of the letter positions in the string.
* `map`: The function takes in an array and a callback function and returns the result of the callback function on each item in the array.
* `takeUntil`: The function takes in an array and a callback function and returns a slice of the array depending on the criteria specified by the callback function.
* `without`: The function takes in a source array and an array of elements to be removed. It returns the source array without the elements provided in the array of elements to be removed.