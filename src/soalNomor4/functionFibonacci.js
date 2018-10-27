


fibonacci = (bar, kol) => {
  let result = 0;
  let current = 0;
  let last = 0;
  let str = "";
  for(let index = 0; index < kol; index++){

    for(let i = 0; i < bar; i++){
      str = str + result + ','
      result = last + current
      if(result === 0){
        result = 1
      }
      last = current
      current = result

    }
    if(index !== 2){
      str += '\n'
    }
  }
  console.log(str)
}

fibonacci(4, 3)

