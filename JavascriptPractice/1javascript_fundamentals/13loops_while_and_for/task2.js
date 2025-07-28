"use strict";

// For every loop iteration, write down which value it outputs and then compare it with the solution.
    let i = 0;
    while (++i < 5) alert( i );
    // increment and check cond. so => 1 , 2 , 3 , 4

    let j = 0;
    while (j++ < 5) alert( j );
    // check cond and increment. so => 1 , 2 , 3 , 4 , 5


// For each loop write down which values it is going to show. Then compare with the answer.
    for (let i = 0; i < 5; i++) alert( i );
    // 0, 1, 2, 3, 4

    for (let i = 0; i < 5; ++i) alert( i );
    // 0, 1, 2, 3, 4

    // alert is called before the increment happens so nothing changes on postfix or prefix