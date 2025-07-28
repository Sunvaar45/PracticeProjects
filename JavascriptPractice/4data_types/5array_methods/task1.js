// @ts-check
"use strict";

/*
Translate border-left-width to borderLeftWidth
importance: 5

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str)
{
    let arr = str.split("-");

    arr = arr.map(function(item, index)
    {    
        if (index === 0) return item;

        return item[0].toUpperCase() + item.slice(1);
    });

    return arr.join("");
}

alert( camelize("background-color") );