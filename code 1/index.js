const app = require('./app')
// console.log(app.z())
x = 20;
if(x===20){
  // console.log("matched")
}

const arr = [2,4,5,6,7,8,9]
let result = arr.filter((item)=> {
  return item > 4
})

console.log(result)