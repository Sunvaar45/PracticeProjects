"use strict";

// whats the output of the code below?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// 1 , second resolve is ignored. only first call of reject/resolve is used