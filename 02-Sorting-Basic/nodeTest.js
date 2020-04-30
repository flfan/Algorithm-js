const fs = require('fs')
const path = require('path')

const dir = fs.readdirSync(__dirname).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, dir)
  const entry = path.join(fullDir, 'app.ts')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(fullDir)) {
    entries[dir] = ['webpack-hot-middleware/client', entry]
  }

  return entries
}, {})


let arr = [1,2,3,4,5]

let b = arr.reduce((t, i) => {
  t[i] = i
  return t
}, [0])
console.log(b); // [ 0, 1, 2, 3, 4, 5 ]


// console.log(fs.statSync(__filename).isFile())
// console.log(fs.existsSync(path.resolve(__dirname, './insertionSort')));

// console.log(__dirname)
// console.log(__filename)
// console.log(dir)