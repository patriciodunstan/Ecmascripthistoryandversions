import fetch from "node-fetch"; 

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();// convierte la respuesta del fetch en un json.

export { products };

// con esta opcion dejas de usar la palabra reservada async para encapsular la funcion y solo usas await.