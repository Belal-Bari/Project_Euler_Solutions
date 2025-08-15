function multiplesOf3Or5(number) {
    //finding Multiples of 3
    let multiples3 = [];
    for(let i=1; i<number; i++){
        if(i%3 === 0){
        multiples3.push(i);
        }
    }

    //finding Multiples of 5
    let multiples5 = [];
    for(let i=1; i<number; i++){
        if(i%5 === 0){
        multiples5.push(i);
        }
    }
    
    let allMultiples = [...multiples3]
    
    //creating array of unique numbers
    for(let i=0; i<multiples5.length; i++){
        let isPresent = allMultiples.includes(multiples5[i])
        if(!isPresent) {
            allMultiples.push(multiples5[i])
        }
    }
    
    //Adding all the multiples
    let sum = 0;
    for(let i=0 ; i<allMultiples.length ; i++){ 
        sum += allMultiples[i]
    }

    console.log(sum)
    return sum;
}

multiplesOf3Or5(49);