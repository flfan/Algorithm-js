
function doubleQuickSort(arr){
  let n = arr.length

  __quickSort(arr, 0, n - 1)
}

function __quickSort(arr, l, r){
  if(l >= r){
    return
  }

  let p = __doublePartition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}
// [4,5,6,3,7,8,4,5,2,9,6]
function __doublePartition(arr, l, r) {
  let a = parseInt(Math.random() * (r - l + 1) + l)
  swap(arr, l, a)
  let v = arr[l]
  let i = l + 1
  let j = r
  while(true){
    while(i <= r && arr[i] < v){
      i++
    }
    while(j > l + 1 && arr[j] > v){
      j--
    }
    if(i > j){
      break
    }
    swap(arr, i, j) // 当arr[i] > v && arr[j] < v 时交换
    i++
    j--
  }
  swap(arr, l, j)
  return j
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = doubleQuickSort