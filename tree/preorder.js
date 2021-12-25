function preorder(n) {
  if(!n) return
  console.log(n.val)
  preorder(n.left)
  preorder(n.right)
}

function preorder2(n) {
  if(!n) return
  const stack = [n]
  while(stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}