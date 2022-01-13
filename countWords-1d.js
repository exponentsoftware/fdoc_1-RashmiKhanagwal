/* 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.
```js
console.log(varietyOfWords(sentence))
28
``` */

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

function countWords(sentence){
    return sentence.trim().split(/\s+/).length;
}

console.log(countWords(sentence));