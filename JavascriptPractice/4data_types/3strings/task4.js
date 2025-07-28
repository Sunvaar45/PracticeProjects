// @ts-check
"use strict";

/*
We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str)
{
    for (let char of str)
    {
        for (let i = 0; i < 10; i++)
        {
            if (char == i.toString())
            {
                return parseFloat(str.slice(i));
            }
        }
    }
    return NaN;
}

alert( extractCurrencyValue("$120") );

/* :D
function extractCurrencyValue(str)
{
    return +str.slice(1);
}
*/