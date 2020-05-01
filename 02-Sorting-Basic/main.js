const mergeSort = require('./mergeSort/mergeSort')
const insertionSort = require('./insertionSort/insertionSort')
const {generateRandomArray, testSort, generateNearlyOrderedArray} = require('./insertionSort/SortTestHelper')

let n = 100000;
const arr = generateRandomArray(n,0,n)
const arr2 = arr.slice()
const arr3 = generateNearlyOrderedArray(n, 200)
const arr4 = arr3.slice()
testSort(insertionSort, arr)
testSort(mergeSort, arr2)
console.log('-------------------------------------------------')
testSort(insertionSort, arr3)
testSort(mergeSort, arr4)