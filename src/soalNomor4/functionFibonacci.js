// function fib(n){
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  return arr[n]
// }
// console.log(fib(0),fib(1),fib(2),fib(3))
// console.log(fib(4),fib(5),fib(6),fib(7))
// console.log(fib(8),fib(9),fib(10),fib(11))




fibonacci = (bar, kol) => {
  let resulet = 0;
  let current = 0;
  let last = 0;
  let str = "";
  for(let index = 0; index < kol; index++){

    for(let i = 0; i < bar; i++){
      str = str + resulet + ','
      resulet = last + current
      if(resulet === 0){
        resulet = 1
      }
      last = current
      current = resulet

    }
    str += '\n'
  }
  console.log(str)
}

fibonacci(4, 3)

