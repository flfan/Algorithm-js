const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./SortTestHelper')
const mergeSort = require('../mergeSort/mergeSort')
const quickSort = require('./quickSort')
const doubleQuickSort = require('./doubleQuickSort')
const quickSort3Ways = require('./quickSort3Ways')


let n = 5000000;
// const arrR = generateRandomArray(n,0,n)
const arrR = generateRandomArray(n,0,100)
// const arr2 = arr.slice()
// const arr3 = generateNearlyOrderedArray(n, 200)
// const arr4 = arr3.slice()
// testSort(quickSort, arr)
testSort(mergeSort, arrR)
// testSort(quickSort, arrR)
testSort(doubleQuickSort, arrR)
testSort(quickSort3Ways, arrR)