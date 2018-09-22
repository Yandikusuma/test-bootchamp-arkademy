function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}
console.log(fib(0),fib(1),fib(2),fib(3))
console.log(fib(4),fib(5),fib(6),fib(7))
console.log(fib(8),fib(9),fib(10),fib(11))

