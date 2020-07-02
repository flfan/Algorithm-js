function intersection(nums1, nums2) {
  let record = new Set()
  nums1.forEach(item => {
    record.add(item)
  })

  let resultSet = new Set()
  nums2.forEach(item => {
    if (record.has(item)) {
      resultSet.add(item)
    }
  })

  let resultArr = []
  resultSet.forEach(item => {
    resultArr.push(item)
  })

  return resultArr
}

let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2))