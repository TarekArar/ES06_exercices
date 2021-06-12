// 5. Write a JavaScript program to convert an array of objects to a
// comma-separated values (CSV) string that contains only the columns specified.

function objectsArrayToCSV(objectsArray) {
  let csvOutput = "";
  // get the object keys
  const keys = Object.keys(objectsArray[0]);
  keys.forEach(
    (key, idx) =>
      (csvOutput += idx === keys.length - 1 ? `${key}\n` : `${key},`)
  );
  // get the object values
  objectsArray.forEach((obj) => {
    const values = Object.values(obj);
    values.forEach(
      (value, idx) =>
        (csvOutput += idx === values.length - 1 ? `${value}\n` : `${value},`)
    );
  });
  return csvOutput;
}

const objectExample = [
  {
    name: "Tarek",
    age: 22,
    mail: "gt_arar@esi.dz",
  },
  {
    name: "Tarek",
    age: 22,
  },
];

objectsArrayToCSV(objectExample);
