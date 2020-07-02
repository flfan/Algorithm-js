function lengthOfLongestSubstring(s = '') {
  // let freq = new Array(256).fill(0)
  let freq = {}
  for (let i=0; i < s.length; i++) {
    freq[s[i]] = 0
  }
  let l = 0, r = -1
  let res = 0
  while (l < s.length) {
    if (r + 1 < s.length && freq[s[r+1]] === 0) {
      r++
      freq[s[r]]++
    } else {
      freq[s[l]]--
      l++
    }

    res = Math.max(res, r - l + 1)
  }

  return res
}

function lengthOfLongestSubstring2(s) {
  const set = new Set()
  let i=0,j=0,maxLength=0
  if(s.length === 0) {
    return 0
  }

  for(i;i<s.length;i++){
    if(!set.has(s[i])){
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    }else{
      while(set.has(s[i])){
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }

  return maxLength
}
