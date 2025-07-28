"use strict";

alert( null || 2 || undefined ); // 2 (first truthy value)


alert( alert(1) || 2 || alert(3) ); 
// 1 , then 2 (first truty is 2. alert(1) is called and then skipped because alert() is undefined (falsy))


alert( 1 && null && 2 ); // null (first falsy value)


alert( alert(1) && alert(2) ); 
// 1 (alert() is falsy so undefined is showed after. alert(2) is ignored)


alert( null || 2 && 3 || 4 ); 
// null || 3 || 4 => 3
