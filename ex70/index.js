// Write a JavaScript program to count the occurrences of a value in an array.

function countValueInArray(array, value) {
  return array.filter((el) => el === value).length;
}
// tests
console.log(countValueInArray([1, 2, 3, 3], 3));
console.log(countValueInArray(["hi", "hello", "hi", "hi"], "hi"));
