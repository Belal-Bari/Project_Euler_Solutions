function largestPrimeFactor(number) {
  
  let i = 2;
  while (i * i <= number){
    if (number%i === 0){
      number = number / i
    } else {
      i++
    }
  }
  console.log(number)
  
  return number;
}

largestPrimeFactor(600851475143);