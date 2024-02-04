const testArr1 = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];
function zipList(arr1, arr2) {
  let i = 0;
  const newArr = [];
  if (arr1.length !== arr2.length) {
    return -1;
  }
  for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(testArr1, testArr2));
console.log(zipListTheSimpleWay(testArr1, testArr2));
