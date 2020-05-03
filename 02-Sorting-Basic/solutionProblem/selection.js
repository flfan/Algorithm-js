// quickSort 求第 n 大的元素
const assert = require('assert')
const {
  generateOrderedArray,
  shuffleArray
} = require("./testHelper");

function __partition(arr, l, r) {

  let a = parseInt(Math.random() * (r - l + 1) + l)
  swap(arr, l, a)
  let v = arr[l]
  let j = l
  // arr[l+1...j] < v ; arr[j+1...i) > v
  for(let i = l + 1; i <= r; i++) {
    if(arr[i] < v){
      swap(arr, i, j + 1)
      j++
    }
  }
  swap(arr, l, j)

  return j
}

function __selection(arr, l, r, k ){

  if( l == r )
      return arr[l];

  // partition之后, arr[p]的正确位置就在索引p上
  let p = __partition( arr, l, r );

  if( k == p )    // 如果 k == p, 直接返回arr[p]
      return arr[p];
  else if( k < p )    // 如果 k < p, 只需要在arr[l...p-1]中找第k小元素即可
      return __selection( arr, l, p-1, k);
  else // 如果 k > p, 则需要在arr[p+1...r]中找第k-p-1小元素
       // 注意: 由于我们传入__selection的依然是arr, 而不是arr[p+1...r],
       //       所以传入的最后一个参数依然是k, 而不是k-p-1
      return __selection( arr, p+1, r, k );
}

// 寻找arr数组中第k小的元素
// 注意: 在我们的算法中, k是从0开始索引的, 即最小的元素是第0小元素, 以此类推
// 如果希望我们的算法中k的语意是从1开始的, 只需要在整个逻辑开始进行k--即可, 可以参考selection2
function selection(arr, n, k) {

    // assert( k >= 0 && k < n );
    if (k >= 0 && k < n){
      return __selection(arr, 0, n - 1, k);
    }

    // return __selection(arr, 0, n - 1, k);
}

// 寻找arr数组中第k小的元素, k从1开始索引, 即最小元素是第1小元素, 以此类推
function selection2(arr, n, k) {

    return selection(arr, n, k - 1);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let n = 100;
let arr = generateOrderedArray(n);
shuffleArray(arr, n);

for( let i = 0 ; i < n ; i ++ ){
  if(selection(arr, n, i) == i)
    console.log(i);
}

// for( let i = 1 ; i <= n ; i ++ ){
//   // assert( selection2(arr, n, i) == i - 1 );
//   if(selection2(arr, n, i) == i)
//     console.log(i);
// }