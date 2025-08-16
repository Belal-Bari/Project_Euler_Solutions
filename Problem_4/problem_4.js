function largestPalindromeProduct(n) {
   
  let digits = '';
  for(let i=1; i<=n; i++){
    digits += '9'
  }
  
  digits = parseInt(digits,10)//shows if n=2,99 or n=3,999
  //console.log(digits)
  //=======finding factors=====================
  //let num = 9009;
  function findFactors(num){
    let factors = [];
    for(let i=2; i<=num ; i++) {
    if(num % i === 0 && i <= digits) {
      factors.push(i)
    }
    if(factors[factors.length-1] >= digits) {
      break
    }
  }
  //console.log(factors);
  return factors
  }
  //findFactors(num)
  //==================================
  let loopLimit = 1;
  for(let i=1; i<n; i++){
    loopLimit *= 10;
  }
  //console.log('LoopLimit: ',loopLimit)

  let beforePal = digits.toString();
  //console.log('beforPal:',beforePal.length)
  let pal = digits;
  let selectedArr = [];

  for(let i=0; i<loopLimit; i++){
    //console.log('Iter:',i)
    //if (pal >9999){break}
    for(let j=beforePal.length-1; j>=0; j--) {
      pal = pal.toString() + beforePal[j];
      //console.log(pal)
    }
    //console.log('pal:',pal)
    pal = parseInt(pal,10);
    const fac = findFactors(pal)
    //console.log('fac:', fac)
    if(fac[fac.length-1] >=loopLimit*9 && fac[fac.length-2] >=loopLimit*9) {
      if(selectedArr.length === 0){
        selectedArr.push({
          'pal':pal, 
          'fac1':fac[fac.length-1], 
          'fac2':fac[fac.length-2]
        })
      } else {
        if(selectedArr[0]['pal'] < pal){
          selectedArr[0] = {
            'pal':pal, 
            'fac1':fac[fac.length-1], 
            'fac2':fac[fac.length-2]
          }
        }
      }
    }
    beforePal = parseInt(beforePal, 10)
    beforePal -= 1;
    beforePal = beforePal.toString()
    //console.log('beforePal:',beforePal)
    pal = parseInt(beforePal, 10);
    //console.log('pal:', pal)
    //console.log('sel',selectedArr)
  }
  console.log(selectedArr[0]['pal']);
  return selectedArr[0]['pal'];
}

largestPalindromeProduct(3);