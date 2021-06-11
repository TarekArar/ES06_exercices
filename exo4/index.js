// 4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row

function csvToArrayOfObjects(csvString, delimiter = ",") {
  const csvArray = csvString.split("\n");
  const titles = csvArray.shift().split(delimiter);
  return csvArray.map((el) => {
    const valuesArray = el.split(delimiter);
    const csvObject = {};
    titles.forEach((title, idx) => {
      csvObject[title] = valuesArray[idx];
    });
    return csvObject;
  });
}

const csvString = `firstName,lastName,street,city,country,matricule
John,Doe,120 jefferson st.,Riverside, NJ, 08075
Jack,McGinnis,220 hobo Av.,Phila, PA,09119
"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
Stephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234
,Blankman,,SomeTown, SD, 00298
"Joan ""the bone"", Anne",Jet,"9th, at Terrace plc",Desert City,CO,00123`;

console.log(csvToArrayOfObjects(csvString));
