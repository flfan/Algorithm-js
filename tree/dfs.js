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


function dfs(n) {
  console.log(n.val)
  n.children.forEach(element => {
    dfs(element)
  });
}

dfs(tree)