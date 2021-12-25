const tree = {
  val: 'a',
  children: [
    {
      val: 'a',
      children: [
        {
          val: 'b',
          children: []
        },
        {
          val: 'c',
          children: []
        }
      ]
    },
    {
      val: 'd',
      children: []
    }
  ]
}

const bfs = (root) => {
  const queue = [root]

  while(queue.length) {
    const n = queue.shift()
    console.log(n.val)

    n.children.forEach(item => {
      queue.push(item)
    })
  }
}

bfs(tree)