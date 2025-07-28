"use strict";

/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

let a = "";
function checkSpam(str)
{    
    let lowerStr = str.toLowerCase();
    
    if (lowerStr.indexOf("viagra") == -1 && lowerStr.indexOf("xxx") == -1)
    {
        return false;
    }
    return true;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

