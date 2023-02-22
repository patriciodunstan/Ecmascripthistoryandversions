// function* es la palabra reservada para un generator
function* iterate(array) {
    for (let value of array) {
        //palabra reservada yield retorna cada uno de los valores segun sea el caso
        yield value;
    }
}

const it = iterate(['oscar', 'David','Ana', 'Ulisses', 'Jennifer'])
//palabra reservada metodo next
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
