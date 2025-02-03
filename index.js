/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return 'up2199811';
}

function fn() {
  return 'Jodie';
}

function sn() {
  return 'Fan';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (typeof obj.data === 'object') {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i < arr.length) {
    arr[i] = n;
  }
}

function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function larger(a, b) {
  if (a >= b ) {
    return a;
  } return b;
}

function largest(arr) {
  let big;
  if (!arr.length) {
    return null
  } else {
    big = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > big) {
        big = arr[i]
      }    
    }
  }
  return big;
}

function compare(a, b) {
  if (a.length != b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  } return true;
}

function addToAll(arr, n) {
  if (!arr.length) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += n;      
    } return arr;
  }
}

// GLOBAL VARIABLE
let remembered;
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;    
  }
  return arr;
}

function addAllOpt(arr = []) {
  if (!arr.length) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    } return sum;
  }
}

function divisors(arr, div) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div == 0) {
      arr2.push(arr[i]);
    }
  } return arr2;
}

function multiples(n, m) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * m);    
  }
  return arr;
}