// 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

function findValueInNestedObject(object, key) {
  if (object[key]) return object[key];
  const arrFromObject = Object.values(object).filter(
    (el) => typeof el === "object"
  );
  const value = arrFromObject.map((el) => findValueInNestedObject(el, key));
  return value[0] || null;
}

const user = {
  name: "Tarek",
  age: 22,
  profile: {
    picture: "http://yyyy.yy/yyy",
    friends: {
      firstName: "Youcef",
    },
  },
};

console.log(findValueInNestedObject(user, "firstName"));
console.log(findValueInNestedObject(user, "picture"));
