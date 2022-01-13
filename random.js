// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
// ```js
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]
// ```

function random(min,max){
    const arr = []
    while(arr.length < min){
        var result = Math.floor(Math.random() * max) + 1
        if(arr.indexOf(result) === -1) arr.push(result)
    }
    return(arr)
}
random(0,9)