function destroyer(array, ...toDelete) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < toDelete.length; j++) {
      if (array[i] === toDelete[j]) {
        array.splice(i, 1);
      }
    }
  }

  return console.log(array);
}

let test = [1, 2, 3, 1, 2, 3];
destroyer(test, 2, 3);
