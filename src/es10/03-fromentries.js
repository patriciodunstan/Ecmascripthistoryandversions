const entries = new Map([["name", "Oscar"], ["age", 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));
/* output
vista de entries antes de fromEntries:
Map(2) { 'name' => 'Oscar', 'age' => 34 }

vista de entries after fromEntries:
{ name: 'Oscar', age: 34 }

conclusion: fromEntries transforma arrays en objetos*/
