function sumSquareDifference(n) {
  let sumOfSquares = (n * (n+1) * (2*n + 1)) / 6
  //console.log(sumOfSquares)

  let sumOfNumberesSquared = Math.pow(((n * (n+1)) / 2), 2)
  //console.log(sumOfNumberesSquared)

  let diff = sumOfNumberesSquared - sumOfSquares
  console.log(diff)
  return diff;
}

sumSquareDifference(100);