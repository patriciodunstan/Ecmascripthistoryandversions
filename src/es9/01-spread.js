const usar = { username: 'gndx', age: 34, country: 'CO'};

const {username, ...values} = user;
console.log(username);
console.log(values);
// al realizar este algoritmo separamos usarname del objeto y le asignamos a values las demas keys y values.
