// 2.d. Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```

function checkUniqueness(array) {
    let values = []
  
    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (values.indexOf(value) !== -1) {
        return false
      }
      values.push(value)
    }
    return true
}

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];

console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));