"use strict";

if (-1 || 0) alert( 'first' ); // if (true) => will execute
if (-1 && 0) alert( 'second' ); // if (false) => won't execute
if (null || -1 && 1) alert( 'third' ); // null || 1 => true = will execute