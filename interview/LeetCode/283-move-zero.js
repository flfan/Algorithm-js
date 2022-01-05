// [1,0,4,0,7] => [1,4,7,0,0]
//时间复杂度o(n)
//空间复杂度o(n)
function moveZeros1(arr) {
    let noZeroArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            noZeroArr.push(arr[i]);
        }
    }
    for (let i = 0; i < noZeroArr.length; i++) {
        arr[i] = noZeroArr[i];
    }
    for (let i = noZeroArr.length; i < arr.length; i++) {
        arr[i] = 0;
    }
}

//时间复杂度o(n)
//空间复杂度o(1)
function moveZeros2(arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0){
            arr[k] = arr[i]
            k++
        }
    }
    for(let i = k; i < arr.length; i++) {
        arr[i] = 0
    }
}

function moveZeros(arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0){
            if (i !== k){
                [arr[k], arr[i]] = [arr[i], arr[k]]
                k++
            }else{
                k++
            }
            
        }
    }
}
function test() {
    let arr = [1, 0, 4, 0, 7];
    moveZeros(arr);
    console.log(arr);
}
test();
