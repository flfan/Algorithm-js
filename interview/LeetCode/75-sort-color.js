// 三路快排思想
// [0,1,0,2,1,2]
function sortColor(arr) {
  let zeroP = -1
  let twoP = arr.length

  for(let i = 0; i < twoP;) {
    if(arr[i] == 2){
      twoP--
      [arr[i], arr[twoP]] = [arr[twoP], arr[i]]
    }else if (arr[i] == 0) {
      zeroP++
      [arr[i], arr[zeroP]] = [arr[zeroP], arr[i]]
    }else {
      i++
    }
  }
}

const generateRandomArray = function(n,rangeL,rangeR) {
  // if (rangeR < rangeL) {
  //   throw new Error('not useful range')
  // }
  // assert(rangeL < rangeR)
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }

  return arr
}

let arr = generateRandomArray(20,0,2)
sortColor(arr)
console.log(arr)


