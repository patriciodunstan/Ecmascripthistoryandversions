const list = new Set(); //el Set de este metodo siempre va con s mayuscula "S", Set es una estructura de datos que solamente guarda elementos unicos

list.add('item 1');
list.add('item2').add('item3');

console.log(list);
//Cómo manipular los Sets
//Para manipular estas estructuras de datos, existen los siguientes métodos:

//add(value): añade un nuevo valor.
//delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
//has(value): retorna un booleano si existe o no el valor dentro del Set.
//clear(value): elimina todos los valores del Set.
//size: retorna la cantidad de elementos del Set.