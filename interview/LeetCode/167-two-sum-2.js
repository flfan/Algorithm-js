// o(n)
function twoSum (arr, target) {
  let i = 0
  let j = arr.length - 1
  while(arr[i] + arr[j] !== target){
    if (arr[i] + arr[j] > target) {
      j--
    }else {
      i++
    }
  }
  return [i+1,j+1]
}

const arr=[1,4,8,57,89,234]
const target = 235

let indexs = twoSum(arr, target)
console.log(indexs)