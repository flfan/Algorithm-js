function inorder(n) {
  if(n == null) return
  inorder(n.left)
  console.log(n.val)
  inorder(n.right)                                                                                                                                                                                                         
}

function inorder2(n) {
  if(n == null) return
  const stack = []
  let p = n

  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
  
    let n = stack.pop()
    console.log(n.val)
    p = p.right
  }
}