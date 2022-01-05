const generateRandomArray = function(n,rangeL,rangeR) {
  if (rangeR < rangeL) {
    throw new Error('not useful range')
  }
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }

  return arr
}

function generateNearlyOrderedArray(n, swapTime) {

  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1
  }

  for (let i = 0; i < swapTime; i++) {
    let a = parseInt(Math.random() * n)
    let b = parseInt(Math.random() * n)
    let t = arr[a]
    arr[a] = arr[b]
    arr[b] = t
  }

  return arr
}

const isSorted = (arr) => {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }

    return true
  }
}

function testSort(sort, arr) {
  let startTime = new Date().getTime()
  sort(arr)
  let endTime = new Date().getTime()
  // console.log(arr)

  if (!isSorted(arr)) {
    throw new Error('未排序')
  }
  console.log(`${sort.name}: ${endTime - startTime} ms`)

}

module.exports = {
  generateRandomArray,
  testSort,
  generateNearlyOrderedArray
}
