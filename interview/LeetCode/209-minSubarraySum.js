function minSubArrayLen(s, nums) {
  let l = 0, r = -1
  let sum = 0
  let res = nums.length + 1
  while (l < arr.length) {
    if (r + 1 < nums.length && sum < s) {
      r++
      sum = sum + nums[r]
    }else {
      sum = sum - nums[l]
      l++
    }

    if (sum >= s) {
      res = Math.min(res, r - l + 1)
    }
  }

  if (res == nums.length + 1) {
    return 0
  }
  return res
}