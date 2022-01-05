const {generateRandomArray, testSort} = require('./SortTestHelper')
const mergeSort = require('./mergeSort')

function __merge(arr, l, mid, r) { // 与mergeSort 中的__merge 相同
  let aux = new Array(r - l + 1);

  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }

  let i = l,
    j = mid + 1;

  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = arr[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}

// 自地向上归并排序
function mergeSortBU(arr) {
  let n = arr.length

  for(let sz = 1; sz <= n; sz += sz){

    for(let i = 0; i + sz < n; i += sz + sz){
      __merge(arr, i, i + sz -1, Math.min((i + sz) + (sz - 1), n - 1))
    }
  }

}

function mergeSortBU2(arr) {
  let n = arr.length

  // size 为每次归并的arr长度
  for(let size = 1; size <= n; size += size){

    for(let i = 0; i < n; i += size + size){

      let l = i
      let mid = i + size - 1
      let r = mid + 1 + (mid - l)
      if (mid + 1 < n ){

        if (r > n - 1){
          r = n - 1
        }
        
        __merge(arr, l, mid, r)
      }
    }
  }

}

let n = 50000;
const arr = generateRandomArray(n,0,n)
const arr2 = arr.slice()
testSort(mergeSortBU, arr)
testSort(mergeSort, arr2)