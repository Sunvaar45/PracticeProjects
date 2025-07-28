"use strict";

// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++)
{
    if (i % 2 != 0) continue;
    alert(i);
}


// rewrite this with while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let j = 0;
while (j < 3)
{
    alert(`number ${j}`);
    j++;
}