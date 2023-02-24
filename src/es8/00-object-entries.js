
//en un objeto {MX: 'Mexico} el primero MX es un key y el segundo 'Mexico' es un value.
const countries = { MX:'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
console.log(Object.entries(countries));//lo transforma en un array y te lo muestra completo.
console.log(Object.keys(countries));// transforma en un array las keys y te las muestra
console.log(Object.values(countries));//transforma en un array los values y te los muestra.

