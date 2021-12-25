function postorder(n) {
  if(!n) return
  postorder(n.left)
  postorder(n.right)
  console.log(n.val)
}

function postorder2(n) {
  if(!n) return
  const stack = [root]
  const outstack = []

  while(stack.length){
    const n = stack.pop()
    outstack.push(n)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)
  }

  while(outstack.length) {
    let n = outstack.pop()
    console.log(n.val)
  }
}