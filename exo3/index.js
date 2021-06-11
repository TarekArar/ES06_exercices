// 3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

function CSVto2DArray(csvString, delimiter = ",") {
  if (typeof csvString === String)
    return csvString.split("\n").map((el) => el.split(delimiter));
  return null;
}

const csvString = `John,Doe,120 jefferson st.,Riverside, NJ, 08075
Jack,McGinnis,220 hobo Av.,Phila, PA,09119
"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
Stephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234
,Blankman,,SomeTown, SD, 00298
"Joan ""the bone"", Anne",Jet,"9th, at Terrace plc",Desert City,CO,00123`;

CSVto2DArray(csvString);
