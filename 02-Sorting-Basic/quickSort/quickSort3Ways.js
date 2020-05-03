function quickSort3Ways(arr) {
  let n = arr.length;

  __quickSort3(arr, 0, n - 1);
}

function __quickSort3(arr, l, r) {
  if (l > r) {
    return;
  }

  let p = partition3(arr, l, r);
  __quickSort3(arr, l, p.lt - 1);
  __quickSort3(arr, p.gt, r);
}

function partition3(arr, l, r) {
  let a = parseInt(Math.random() * (r - l + 1) + l);
  swap(arr, l, a);

  let v = arr[l];
  // arr[l + 1....lt] arr[gt...r] arr[lt + 1...i) 开始时为空
  let lt = l; // arr[l + 1....lt]　＜　ｖ
  let gt = r + 1; // arr[gt...r]　>　ｖ
  let i = l + 1; // arr[lt + 1...i)　=　ｖ

  // [4,5,6,3,7,8,4,5,2,9,6]
  while (i < gt) {
    if (v < arr[i]) {
      swap(arr, i, gt - 1);
      gt--;
    } else if (v > arr[i]) {
      swap(arr, lt + 1, i);
      lt++;
      i++;
    } else {
      i++;
    }
  }
  swap(arr, l, lt);
  return {
    lt,
    gt,
  };
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = quickSort3Ways;
