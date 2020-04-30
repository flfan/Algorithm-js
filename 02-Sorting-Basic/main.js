const mergeSort = require('./mergeSort/mergeSort')
const insertionSort = require('./insertionSort/insertionSort')
const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./insertionSort/SortTestHelper')

let n = 50000;
const arr = generateRandomArray(n,0,n)
const arr2 = arr.slice()
testSort(insertionSort, arr)
testSort(mergeSort, arr2)