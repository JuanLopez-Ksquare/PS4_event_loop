function mainFunction(arr, toDelete) {
  for (let i = 0; i < arr.length; i++) {
    if (toDelete(arr[0])) {
      continue;
    } else {
      arr.shift();
    }
  }

  return console.log(arr);
}

mainFunction([1, 2, 3, 4], (n) => n >= 3);
//mainFunction([1, 2, 3, 7, 4], (n) => n > 3);
//mainFunction([0, 1, 0, 1], (n) => n === 1);

/* function toDelete(n) {
  if (n >= 3) {
    return true;
  } else {
    return false;
  }
} */
/* function toDelete(n) {
  if (n > 3) {
    return true;
  } else {
    return false;
  }
} */
/* function toDelete(n) {
  if (n === 1) {
    return true;
  } else {
    return false;
  }
} */
