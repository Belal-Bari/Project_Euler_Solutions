function smallestMult(n) {
  let num = n;
  let multiple = [];

  while(multiple.length === 0){
    //console.log('iter')
    //console.log('num:',num)
    for(let j=n; j>0; j--){
      if(num % j !== 0) {
        break
      }
      if(j === 1) {multiple.push(num)}
    }
    //if(multiple.length !== 0)
    num = num + 1;
  }
  console.log(multiple)
  return multiple[0];
}

smallestMult(10);