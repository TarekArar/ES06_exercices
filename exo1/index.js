// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent
// property values to the second one.

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
// tests
const user = {
  name: "Tarek",
  mail: "hello there",
  nested: {
    password: "hi",
    password2: "hi",
    nested2: {
      att1: "att1",
      att2: "att2",
      arrayAtt: ["one", 2, 5, { name: "Tarek" }],
    },
  },
};
const user2 = {
  name: "Tarek",
  mail: "hello there",
  nested: {
    password: "hi",
    password2: "hi",
    nested2: {
      att1: "att1",
      att2: "att2",
      arrayAtt: ["one", 2, 5, { name: "Tarek" }],
    },
  },
};

console.log(compareObjects(user, user2));
