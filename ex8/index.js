// 8. Write a JavaScript program to filter out the specified values from a specified array.
//Return the original array without the filtered values.

function filterArray(originalArray) {
  const args = Object.values(arguments);
  args.shift();
  return originalArray.filter(
    (el) => !args.find((filteredEl) => el === filteredEl)
  );
}

console.log(filterArray([1, 2, 3, 4, 4], 4, 3));
