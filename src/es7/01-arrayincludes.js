
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(4)) //se usa el metodo includes para saber si el numero que puse esta en el array, la respuesta es un boolean.

const List = ['Oscar', 'David', 'Ana'];
console.log(List.includes('oscar'));// diferencia entre mayuscula y minusculas.
//includes para objetos tambien existe el cual es:
//se diferencia en que "in" evalúa todas las propiedades del objeto y del prototipo-
//el método "hasOwnProperty" evalúa solamente las propiedades del objeto en el prototipo, por lo que la ultima versión de ECMASCRIPT lanzó "Object.hasOwn" y se recomienda utilizar este si el navegador en que trabajas lo soporta: Can I use?.
const letras = { a:1, b:2, c:3 };
"toString" in letras //true
letras.hasOwnProperty("toString")//false
Object.hasOwn(letras, "toString") //false
console.log(letras.hasOwnProperty("toString"));//false
console.log(Object.hasOwn("toString"));//false. toString es una forma de consultar si existen string dentro del objeto.