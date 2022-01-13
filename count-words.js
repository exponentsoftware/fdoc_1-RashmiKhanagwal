/*1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
```js
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));
The word love more frequently occurred than you.

```*/

function countWords(paragraph, love, you){
    let words = paragraph.split(" ");
    let count = 0;
    let count1 = 0;

    for (let i=0; i< words.length; i++){
        if (words[i].includes(love))
            count++;
        if (words[i].includes(you))
            count1++;
    }
    if (count < count1)
        return count1;

    return count;
    
}

console.log(countWords("I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.", 'love', 'you'))