# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lilygo92/lotide`

**Require it:**

`const _ = require('@lilygo92/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Function to assert that two arrays are equal (Do not use, use assert.deepEqual)
* `assertEqual(actual, expected)`: Function to assert that two parameters are equal (Do not use, use assert.strictEqual) 
* `assertObjectsEqual(actual, expected)`: Function to assert that two objects are equal (Do not use, use assert.deepEqual)
* `countLetters(string)`: Function to return the number of each letter in a string, minus whitespaces
* `countOnly(allItems, ItemsToCount)`: Function to take an array allItems and an object ItemsToCount and return an object containing counts of everything that ItemsToCount listed
* `eqArrays(actual, expected)`: Function to return true or false if actual is equal to expected, works with arrays
* `eqObjects(actual, expected)`: Function to return true or false if actual is equal to expected, works with objects
* `findKey(obj, callback)`: Function to take an object and a callback function, scan the object and return the first key for which the callback returns a truthy value
* `findKeyByValue(obj, value)`: Function to take an object and a value, and return the first key that has the same value
* `flatten(arr)`: Function to remove nesting from inside an array 
* `head(arr)`: Function to return the first item from an array
* `letterPositions(sentence)`: Function to take a string and return all the indices where each character is found
* `map(array, callback)`: Function to run each item in an array through a callback function
* `middle(arr)`: Function to return the middle element(s) of an array if the array has more than two items
* `tail(arr)`: Function to return the last element in an array 
* `takeUntil(data, callback)`: Function to execute a callback function on each element in array data until the callback returns true
* `without(arr, remove)`: Function to remove all instances of an item from an array