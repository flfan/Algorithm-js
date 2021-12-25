const graph = {
  0:[1,2]
}

const visited = new Set()
const q = []

function bfs(n) {
  visited.add(n)
  q.push(n)
  while(q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach(item => {
      if(visited.has(item)){
        q.push(item)
        visited.add(item)
      }
    })
  }
}