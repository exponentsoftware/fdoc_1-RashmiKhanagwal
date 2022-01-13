// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
// > It may be useful to know that you can find the length of a string by writing .length after it.

let chr="";

for (let i=0;i<=6;i++){
    for (let j=0;j<=i;j++){
        chr=chr+("#");
    }
    console.log(chr);
    chr='';
}