const graph = {
  0:[1,2]
}
const visited = new Set()
const dfs = (n) => {
  console.log(n)
  visited.add(n)
  graph[n].forEach(c => {
    if(!visited.has(c)){
      dfs(c)
    }
  })
}